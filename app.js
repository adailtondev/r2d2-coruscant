const express = require("express");
const bodyParser = require("body-parser");
const movies = require("./movies/routes");
var cors = require("cors");
const port = process.env.PORT || 4000

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(movies);

app.listen(port, function () {
  console.log(`O aplicativo está rodando na porta ${port}`);
});
