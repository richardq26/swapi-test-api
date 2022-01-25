const { URL } = require("../../../config");
const axios = require("axios");
const { translateResults } = require("../../../helpers");
module.exports = async (id) => {
  try {
    let { data } = await axios.get(`${URL}/vehicles/${id}`);

    return await translateResults(data);
  } catch (error) {
    return {
      error: {
        code: 500,
        message: error.message,
      },
    };
  }
};