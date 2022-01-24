const starshipController = require("./starship.controller");

module.exports = (api, opts) => {
  api.get("/", starshipController.paginate);
  api.get("/:id", starshipController.getOne);
};
