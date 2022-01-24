"use strict";
const app = require("./components/app");
module.exports.Server = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return await app.run(event, context, callback);
};
