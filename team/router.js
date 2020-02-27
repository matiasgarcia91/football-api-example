const { Router } = require("express");
const { Team } = require("./model");
const { Player } = require("../player/model");
const middlewares = require("../middlewares");

const router = new Router();

router.get("/", (req, res, next) => {
  Team.findAll().then(teams => res.json(teams));
});

router.post("/", (req, res, next) => {
  const { name } = req.body;
  Team.create({ name })
    .then(team => {
      console.log("Created the team!");
      res.json(team);
    })
    .catch(error => next(error));
});

router.get("/:id", (req, res, next) => {
  const teamId = parseInt(req.params.id);
  console.log(teamId);
  Team.findByPk(teamId, { include: [Player] }).then(team => {
    if (!team) {
      res.status(404).send("Team not found!");
    } else {
      res.json(team);
    }
  });
});

module.exports = router;
