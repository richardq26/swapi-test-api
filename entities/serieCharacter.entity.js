module.exports = {
  name: "SerieCharacter",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    nombre: {
      type: "varchar",
    },
    serie: {
      type: "varchar",
      nullable: true,
    },
    tipoDeSerie: {
      type: "varchar",
      nullable: true,
    },
    especie: {
      type: "varchar",
    },
    accionImportante: {
      type: "longtext",
      nullable: true,
    },
    created: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updated: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
};
