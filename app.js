const express = require("express");
const bodyParser = require("body-parser");
const movies = require("./movies/routes");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(movies);

app.listen(4000, function () {
  console.log("O aplicativo está rodando na porta 4000");
});
