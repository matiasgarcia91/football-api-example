const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const teamRouter = require("./team/router");
const playerRouter = require("./player/router");

app.use(express.json()); //Express own bodyParser
// app.use(bodyParser.json()) // body-parser package

app.use("/team", teamRouter);
app.use("/player", playerRouter);
// app.use("/player", playerRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`App started in port: ${port}`));
