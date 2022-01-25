module.exports = {
  name: "Favorite",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    tipo: {
      type: "varchar",
      default: null,
    },
    idSwapiModel: {
      type: "int",
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
