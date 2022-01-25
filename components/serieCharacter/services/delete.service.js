const getConnection = require("../../../database");
const { EntityNames } = require("../../../entities");


module.exports = async (id) => {
  try {
    const connection = await getConnection();
    const serieCharacterRepository = connection.getRepository(
      EntityNames.SerieCharacterEntity
    );
    let exists = await serieCharacterRepository.findOne({ id });
    if (!exists) {
      return {
        error: {
          code: 404,
          message: "No existe un personaje de serie con ese id",
        },
      };
    }
  
    
    await serieCharacterRepository.delete(id);
    return{
      msg: "Personaje de serie eliminado correctamente",
    }
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
