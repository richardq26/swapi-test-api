const joi = require("joi");

exports.addFavoriteDTO = joi.object({
  tipo: joi.string().required().valid("vehiculo","especie", "nave"),
  idSwapiModel: joi.number().required()
});


