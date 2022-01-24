const { URL } = require("../../../config");
const axios = require("axios");
const { translateResults } = require("../../../helpers");
module.exports = async ({ page = 1, search = "" }) => {
  try {
    let {
      data: { results },
    } = await axios.get(`${URL}/species?page=${page}&search=${search}`);

    return await translateResults(results);
  } catch (error) {
    return {
      error: {
        code: 500,
        message: error.message,
      },
    };
  }
};
