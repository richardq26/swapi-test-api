const buildMessage = (code, message) => {
  if (code == 200 || code == 201) {
    return message;
  }
  return {
    errors: {
      message,
    },
  };
};
// .cors({origin: '*'})

module.exports = (res, statusCode, response) => {
  return res
    .header("Access-Control-Allow-Origin", "*")
    .header("Access-Control-Allow-Credentials", false)
    .header(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, OPTIONS,PATCH"
    )
    .header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    )
    .status(statusCode)
    .json(buildMessage(statusCode, response));
};
