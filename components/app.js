class App {
  constructor() {
    this.app = require("lambda-api")();
    this.setRoutes();
  }
  setRoutes() {
    this.app.register(require("./starships/starship.routes"), { prefix: "/starships" });
    this.app.register(require("./species/species.routes"), { prefix: "/species" });
    this.app.register(require("./vehicles/vehicles.routes"), { prefix: "/vehicles" });
    this.app.use((err, req, res, next) => {
      res
        .header("Access-Control-Allow-Origin", "*")
        .header(
          "Access-Control-Allow-Headers",
          "Content-Type, Authorization, Token, Content-Length, X-Requested-With"
        )
        .header(
          "Access-Control-Allow-Methods",
          "GET, PUT, POST, DELETE, OPTIONS,PATCH"
        )
        .header("Access-Control-Allow-Origin", "*");
      if (err.name == "RouteError" || err.name == "MethodError") {
        // Ruta no válida o method not allowed
        res.status(403);
        res.json({
          errors: {
            message: "Ruta no válida",
          },
        });
      } else {
        res.status(err.status || 500);
        res.json({
          errors: {
            message: err.message,
          },
        });
      }

      return next();
    });

    this.app.options("/*", (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST, DELETE, OPTIONS"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Token, Content-Length, X-Requested-With"
      );
      res.status(200).send({});
    });
  }
}

const Aplication = new App();
module.exports = Aplication.app;
