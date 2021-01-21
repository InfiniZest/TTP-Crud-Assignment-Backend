const Sequelize = require("sequelize");

const db = new Sequelize(
  "postgres://anastasiyachabotska:12345@localhost:5432/crud"
);

module.exports = db;
