const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { dataSet, paginate } = require("./helpers/dataSet");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/select_top_by_playtime", (req, res) => {
  const { genre, platform } = req.query;
  return res.json(dataSet(genre, platform, "playTime"));
});

app.get("/select_top_by_players", (req, res) => {
  const { genre, platform } = req.query;
  return res.json(dataSet(genre, platform, "userId"));
});

app.get("/paginate", (req, res) => {
  const { genre, platform, page, size } = req.query;
  return res.json(paginate(dataSet(genre, platform, "userId"), page, size));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port: http://localhost:${process.env.PORT}`);
});
