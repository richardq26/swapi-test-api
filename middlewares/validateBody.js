const options = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: true,
};
const { response } = require("../helpers");
const validationBody = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body, options);
  if (error) {
    console.log(error);
    response(res, 400, error);
  }
  req.body = value;
  next();
};

module.exports = validationBody;
