const { Router } = require("express");
const { Player } = require("./model");
const { Team } = require("../team/model");

const router = new Router();

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(req.params);
  Player.findByPk(id, { include: [Team] })
    .then(player => {
      console.log(player.dataValues);
      res.json(player);
    })
    .catch(e => next(e));
});

router.get("/", (req, res, next) => {
  // find all players and send back
  Player.findAll()
    .then(players => res.json(players))
    .catch(error => next(error));
});

router.post("/", (req, res, next) => {
  // Create a new player
  // body => { name, number }
  const { name, number, teamId } = req.body;
  console.log({ name, number, teamId });

  Player.create({ name, number, teamId })
    .then(player => res.json(player))
    .catch(e => next(e));
});

module.exports = router;
