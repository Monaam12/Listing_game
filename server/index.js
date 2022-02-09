const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SetData = require("./helpers/SetData")

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json(SetData());
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port: http://localhost:${process.env.PORT}`);
});
