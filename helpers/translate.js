const axios = require("axios");
const { TRANSLATE_URL, API_KEY } = require("../config");
module.exports = async (word) => {
  const target = "es";
  const { data } = await axios.post(`${TRANSLATE_URL}?key=${API_KEY}`, {
    q: [word],
    target: target,
    source: "en",
  });

  return data.data.translations[0].translatedText;
};
