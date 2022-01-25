const { URL } = require("../../../config");
const getConnection = require("../../../database");
const { EntityNames } = require("../../../entities");
const axios = require("axios");
const { translateResults } = require("../../../helpers");
const { ILike } = require("typeorm");
module.exports = async ({
  page = 1,
  perPage = 15,
  search,
  sort = "DESC",
}) => {
  try {
    const connection = await getConnection();
    const serieCharacterRepository = connection.getRepository(
      EntityNames.SerieCharacterEntity
    );

    let findLogic = { order: { created: sort }, where: {} };
    var whereLogic = {};
    if (search) {
      findLogic.where = [
        { ...whereLogic, nombre: ILike(`%${search}%`) },
        { ...whereLogic, especie: ILike(`%${search}%`) },
      ];
    }
    if (page) {
      findLogic.skip = perPage * (page - 1);
      findLogic.take = perPage;
    }
    const [data, total] = await serieCharacterRepository.findAndCount(
      findLogic
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
