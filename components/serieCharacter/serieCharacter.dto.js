const joi = require("joi");

exports.createDTO = joi.object({
  nombre: joi.string().required(),
  accionImportante: joi.string(),
  specieSwapiId: joi.number().required(),
  serie: joi.string().required(),
  tipoDeSerie: joi.string().allow(null),
});

exports.updateDTO = joi.object({
  nombre: joi.string(),
  accionImportante: joi.string(),
  specieSwapiId: joi.number(),
  serie: joi.string(),
  tipoDeSerie: joi.string(),
});
