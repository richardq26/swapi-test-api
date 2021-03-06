const axios = require("axios");
const { TRANSLATE_URL, API_KEY } = require("../config");
// Método que devuelve un array traducido en las mismas posiciones
// Se hace uso de google translate api
module.exports = async (array) => {
  const target = "es";
  const { data } = await axios.post(`${TRANSLATE_URL}?key=${API_KEY}`, {
    q: array,
    target: target,
    source: "en",
  });

  // Uso del método translate
  return data.data.translations.map(
    (translation) => translation.translatedText
  );
};
