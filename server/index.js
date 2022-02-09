const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dataSet = require("./helpers/dataSet");
const { orderBy } = require("lodash");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/select_top_by_playtime", (req, res) => {
  const { genre, platform } = req.query;
  return res.json(
        orderBy(
            dataSet(genre, platform),
            ["playTime"],
            ["desc"]
        )
    );
});

app.get("/select_top_by_players", (req, res) => {
  const { genre, platform } = req.query;
  return res.json(
        orderBy(
            dataSet(genre, platform),
            ['userId'],
            ['desc']
        )
    );
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port: http://localhost:${process.env.PORT}`);
});
