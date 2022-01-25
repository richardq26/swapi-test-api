const getConnection = require("../../../database");
const { EntityNames } = require("../../../entities");
const axios = require("axios");
const { URL } = require("../../../config");
const { translate } = require("../../../helpers");

module.exports = async (body) => {
  try {
    const connection = await getConnection();
    const serieCharacterRepository = connection.getRepository(
      EntityNames.SerieCharacterEntity
    );
    let exists = await serieCharacterRepository.findOne({
      nombre: body.nombre,
      serie: body.serie,
    });
    if (exists) {
      return {
        error: {
          code: 400,
          message: "Ya existe un personaje con ese nombre en esa serie.",
        },
      };
    }
    try {
      const { data } = await axios.get(`${URL}/species/${body.specieSwapiId}`);
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

    return await serieCharacterRepository.save(body);
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
