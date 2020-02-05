const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const teamRouter = require("./team/router");

const logginMiddleware = (req, res, next) => {
  console.log("request recieved!");
  next();
};

app.use(express.json()); //Express own bodyParser
// app.use(bodyParser.json()) // body-parser package

app.use("/team", teamRouter);
app.use("/player", playerRouter);

app.get("/", logginMiddleware, (req, res) => {});

app.listen(port, () => console.log(`App started in port: ${port}`));
