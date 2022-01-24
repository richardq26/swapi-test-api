const typeorm = require("typeorm");
const { StarshipEntity } = require("../entities");
const EntitySchema = typeorm.EntitySchema;
const { NOMBRE_DB, HOST_DB, PORT, USERNAME, PASSWORD } = require("../config");
const connectionOptions = {
  type: "mysql",
  synchronize: true,
  database: NOMBRE_DB,
  host: HOST_DB,
  port: Number(PORT),
  username: USERNAME,
  password: PASSWORD,
  charset: "utf8",
  formatOptions: {
    castParameters: false,
  },
  entities: [new EntitySchema(StarshipEntity)],
};

var cachedConnection;
module.exports = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }
  cachedConnection = await typeorm.createConnection(connectionOptions);
  console.log("Nueva conexión creada");
  return cachedConnection;
};
