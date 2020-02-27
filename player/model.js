const db = require("../db");
const Sequelize = require("sequelize");

const Player = db.define("player", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  number: Sequelize.INTEGER
});

module.exports = { Player };
