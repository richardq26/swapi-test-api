const favoriteController = require("./favorites.controller");
const validateBody = require("../../middlewares/validateBody");
const { addFavoriteDTO } = require("./favorites.dto");
module.exports = (api, opts) => {
  api.get("/", favoriteController.getFavorites);
  api.post("/", validateBody(addFavoriteDTO), favoriteController.addFavorite);
  api.delete("/:id", favoriteController.delete);
};
