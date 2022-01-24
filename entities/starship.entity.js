module.exports = {
  name: "Starship",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    nombre: {
      type: "varchar",
      default: null,
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
