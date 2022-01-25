const { URL } = require("../../../config");
const getConnection = require("../../../database");
const { EntityNames } = require("../../../entities");
const axios = require("axios");
const { translateResults } = require("../../../helpers");
const { ILike } = require("typeorm");
const model = require("../principalModels");
module.exports = async ({ page = 1, perPage = 15, sort = "DESC", search }) => {
  try {
    const connection = await getConnection();
    const favoritesRepository = connection.getRepository(
      EntityNames.FavoriteEntity
    );

    let findLogic = { order: { created: sort }, where: {} };
    var whereLogic = {};
    if (search) {
      findLogic.where = [{ ...whereLogic, tipo: ILike(`%${search}%`) }];
    }
    if (page) {
      findLogic.skip = perPage * (page - 1);
      findLogic.take = perPage;
    }
    let [data, total] = await favoritesRepository.findAndCount(findLogic);
   
    data = await Promise.all(
      data.map(async (d) => {
        let url = `${URL}/${model[d.tipo]}/${d.idSwapiModel}`;
        let { data } = await axios.get(url);
        data = await translateResults(data);
        return { ...d, dataSwapi:{...data} };
      })
    );

    let pages = Math.ceil(total / perPage);
    return {
      page,
      perPage,
      pages,
      data,
      total,
    };
  } catch (error) {
    return {
      error: {
        code: 500,
        message: error.message,
      },
    };
  }
};
