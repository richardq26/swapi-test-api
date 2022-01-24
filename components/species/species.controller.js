const { response } = require("../../helpers");
const speciesServices = require("./services");

exports.paginate = async (req, res) => {
  let { page = 1, search = "" } = req.query;
  let paginate = await speciesServices.paginate({ page, search });
  if (paginate.error) {
    return response(res, paginate.error.code, paginate.error.message);
  }
  return response(res, 200, paginate);
};

exports.getOne = async (req, res) => {
  let { id } = req.params;
  let getOne = await speciesServices.getOne(id);
  if (getOne.error) {
    return response(res, getOne.error.code, getOne.error.message);
  }
  return response(res, 200, getOne);
};
