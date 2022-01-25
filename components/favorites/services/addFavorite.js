const getConnection = require("../../../database");
const { EntityNames } = require("../../../entities");

module.exports = async (body) => {
  try {
    const connection = await getConnection();
    const favoriteRepository = connection.getRepository(
      EntityNames.FavoriteEntity
    );
    let exists = await favoriteRepository.findOne({
      tipo: body.tipo,
      idSwapiModel: body.idSwapiModel,
    });
    if (exists) {
      return {
        error: {
          code: 400,
          message: "Ya existe su favorito",
        },
      };
    }

    return await favoriteRepository.save(body);
  } catch (error) {
    console.log(error);
    return {
      error: {
        code: 500,
        message: error.message,
      },
    };
  }
};
