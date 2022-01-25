const vehiclesController = require("./vehicles.controller");

module.exports = (api, opts) => {
  api.get("/", vehiclesController.paginate);
  api.get("/:id", vehiclesController.getOne);
};
