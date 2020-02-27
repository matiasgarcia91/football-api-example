const db = require("../db");
const Sequelize = require("sequelize");
const { Player } = require("../player/model");

const Team = db.define("team", {
  name: Sequelize.STRING
});

Player.belongsTo(Team);
Team.hasMany(Player);

module.exports = { Team };
