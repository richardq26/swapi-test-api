const { response } = require("../../helpers");
const favoriteServices = require("./services");

exports.getFavorites = async (req, res) => {
  let { page = 1, sort, perPage = 15 } = req.query;
  let paginate = await favoriteServices.getFavorites({ page, sort, perPage });
  if (paginate.error) {
    return response(res, paginate.error.code, paginate.error.message);
  }
  return response(res, 200, paginate);
};

exports.addFavorite = async (req, res) => {
  let favorite = await favoriteServices.addFavorite(req.body);
  if (favorite.error) {
    return response(
      res,
      favorite.error.code,
      favorite.error.message
    );
  }
  return response(res, 200, favorite);
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  let resp = await favoriteServices.deleteFavorite(id);
  if (resp.error) {
    return response(res, resp.error.code, resp.error.message);
  }
  return response(res, 200, resp);
};
