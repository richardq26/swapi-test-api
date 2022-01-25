const serieCharacterController = require("./serieCharacter.controller");
const validateBody = require("../../middlewares/validateBody");
const { createDTO, updateDTO } = require("./serieCharacter.dto");
module.exports = (api, opts) => {
  api.get("/", serieCharacterController.paginate);
  api.post("/", validateBody(createDTO), serieCharacterController.create);
  api.put("/:id", validateBody(updateDTO), serieCharacterController.update);
  api.delete("/:id", serieCharacterController.delete);
};
