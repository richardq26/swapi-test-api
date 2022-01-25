const getConnection = require("../../../database");
const { EntityNames } = require("../../../entities");

module.exports = async (id) => {
  try {
    const connection = await getConnection();
    const favoritesRepository = connection.getRepository(
      EntityNames.FavoriteEntity
    );
    let exists = await favoritesRepository.findOne({ id });
    if (!exists) {
      return {
        error: {
          code: 404,
          message: "No tiene un favorito con ese id",
        },
      };
    }

    await favoritesRepository.delete(id);
    return {
      msg: "Se ha eliminado de sus favoritos",
    };
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
