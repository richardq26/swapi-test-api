const typeorm = require("typeorm");
const { SerieCharacterEntity, FavoriteEntity } = require("../entities");
const EntitySchema = typeorm.EntitySchema;
const { DB_NAME, DB_HOST, PORT, USERNAME, PASSWORD } = require("../config");
const connectionOptions = {
  type: "mysql",
  synchronize: false,
  database: DB_NAME,
  host: DB_HOST,
  port: Number(PORT),
  username: USERNAME,
  password: PASSWORD,
  charset: "utf8",
  formatOptions: {
    castParameters: false,
  },
  entities: [
    new EntitySchema(SerieCharacterEntity),
    new EntitySchema(FavoriteEntity),
  ],
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
