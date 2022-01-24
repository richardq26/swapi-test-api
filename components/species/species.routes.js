const speciesController = require("./species.controller");

module.exports = (api, opts) => {
  api.get("/", speciesController.paginate);
  api.get("/:id", speciesController.getOne);
};
