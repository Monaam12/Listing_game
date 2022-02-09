const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SetData = require("./helpers/SetData")

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/select_top_by_playtime", (req, res) => {
    const { genre, platform } = req.query;
  return res.json(SetData(genre, platform));
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port: http://localhost:${process.env.PORT}`);
});
