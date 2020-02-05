const db = require("../db");
const Sequelize = require("sequelize");

const Team = db.define("team", {
  name: Sequelize.STRING
});

module.exports = { Team };
