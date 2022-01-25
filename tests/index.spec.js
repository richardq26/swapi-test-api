const starships = require("../components/starships/services");
const vehicles = require("../components/vehicles/services");
const species = require("../components/species/services");
const serieCharacter = require("../components/serieCharacter/services");
const favorites = require("../components/favorites/services");
const helpers = require("../helpers");

// Pruebas unitarias de gets para probar conexión a base de datos y obtención de datos
describe("GET /starships", () => {
  test("Paginate", () => {
    const response = starships.paginate;
    expect(response.toBeDefined);
  });

  test("Obtener uno", () => {
    const response = starships.getOne;
    expect(response.toBeDefined);
  });
});

describe("GET /species", () => {
  test("Paginate", () => {
    const response = species.paginate;
    expect(response.toBeDefined);
  });

  test("Obtener uno", () => {
    const response = species.getOne;
    expect(response.toBeDefined);
  });
});

describe("GET /vehicles", () => {
  test("Paginate", () => {
    const response = vehicles.paginate;
    expect(response.toBeDefined);
  });

  test("Obtener uno", () => {
    const response = vehicles.getOne;
    expect(response.toBeDefined);
  });
});

describe("GET /serieCharacter", () => {
  test("Paginate", () => {
    const response = serieCharacter.paginate;
    expect(response.toBeDefined);
  });
});

describe("GET /favorites", () => {
  test("Paginate", () => {
    const response = favorites.getFavorites;
    expect(response.toBeDefined);
  });
});
