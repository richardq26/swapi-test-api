const { response } = require("../../helpers");
const serieCharacterServices = require("./services");

exports.paginate = async (req, res) => {
  let { page = 1, search, sort, perPage=15 } = req.query;
  let paginate = await serieCharacterServices.paginate({ page, search, sort, perPage });
  if (paginate.error) {
    return response(res, paginate.error.code, paginate.error.message);
  }
  return response(res, 200, paginate);
};

exports.create = async (req, res) => {
  let serieCharacter = await serieCharacterServices.create(req.body);
  if (serieCharacter.error) {
    return response(
      res,
      serieCharacter.error.code,
      serieCharacter.error.message
    );
  }
  return response(res, 200, serieCharacter);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  let update = await serieCharacterServices.update(id, req.body);
  if (update.error) {
    return response(res, update.error.code, update.error.message);
  }
  return response(res, 200, update);
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  let resp = await serieCharacterServices.delete(id);
  if (resp.error) {
    return response(res, resp.error.code, resp.error.message);
  }
  return response(res, 200, resp);
};
