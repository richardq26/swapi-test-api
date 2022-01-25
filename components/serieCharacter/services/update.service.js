const getConnection = require("../../../database");
const { EntityNames } = require("../../../entities");
const axios = require("axios");
const { URL } = require("../../../config");
const { translate } = require("../../../helpers");

module.exports = async (id, body) => {
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
    if (body.specieSwapiId) {
      try {
        const { data } = await axios.get(
          `${URL}/species/${body.specieSwapiId}`
        );
        body.especie = await translate(data.name);
      } catch (err) {
        return {
          error: {
            code: 404,
            message: "La especie no existe",
          },
        };
      }
      delete body.specieSwapiId;
    }

    
    await serieCharacterRepository.update(id, body);
    return{
      msg: "Personaje de serie actualizado correctamente",
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
