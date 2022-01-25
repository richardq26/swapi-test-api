const starships = require("../components/starships/services");
const vehicles = require("../components/vehicles/services");
const species = require("../components/species/services");
const helpers= require("../helpers");

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
