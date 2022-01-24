const axios = require("axios");
const { TRANSLATE_URL, API_KEY } = require("../config");
module.exports = async (array) => {
  const target = "es";
  const { data } = await axios.post(`${TRANSLATE_URL}?key=${API_KEY}`, {
    q: array,
    target: target,
    source: "en",
  });

  return data.data.translations.map(
    (translation) => translation.translatedText
  );
};
