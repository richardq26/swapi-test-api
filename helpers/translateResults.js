const translateArray = require("./translateArray");

module.exports = async (results) => {
  if (Array.isArray(results)) {
    const arrayTranslated = await translateArray(Object.keys(results[0]));
    results.forEach((result) => {
      let i = 0;
      for (let property in result) {
        Object.defineProperty(
          result,
          arrayTranslated[i],
          Object.getOwnPropertyDescriptor(result, property)
        );
        delete result[property];
        i++;
      }
    });
  } else {
    if (typeof results === "object") {
      const arrayTranslated = await translateArray(Object.keys(results));
      let i = 0;
      for (let property in results) {
        Object.defineProperty(
          results,
          arrayTranslated[i],
          Object.getOwnPropertyDescriptor(results, property)
        );
        delete results[property];
        i++;
      }
    } else {
      return {
        error: {
          code: 400,
          message: "Respuesta no válida",
        },
      };
    }
  }

  return results;
};
