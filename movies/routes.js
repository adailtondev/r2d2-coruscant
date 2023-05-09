const functions = require("./functions");
const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const schemas = require("./schemas");
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

router.use('/', swaggerUi.serve)
router.get('/', swaggerUi.setup(swaggerDocument))

// requisição da lista completa de filmes
router.get("/movies", async (req, res) => {
  const movies = await functions.allMovies();

  if (movies.length > 0) res.send(movies);
  else res.status(404).send("Não foi encontrado nenhum filme");
});

// requisição para adicionar um novo filme
router.post("/movies", schemas.movieSchema(), async (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(404).send({ errors: result.errors.map((erro) => erro.msg) });
  }
  const exists = await functions.existentMovie(req.body);
  if (exists.length > 0) {
    res.status(400).send(`Filme: ${req.body.name} já inserido.`);
  } else {
    await functions.addMovie(req.body);
    const movies = await functions.allMovies();
    res.status(201).send(movies);
  }
});

// requisição para deletar um filme
router.delete("/movies/:id", async (req, res) => {
  await functions.removeMovie(req.params.id);

  const movies = await functions.allMovies();

  res.status(200).send(movies);
});

// requisição para atualizar um filme
router.put("/movies/:id", schemas.movieSchema(), async (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    await functions.updateMovie(req.body, req.params.id);
    const movies = await functions.allMovies();

    res.status(200).send(movies);
  }
});

// requisição ordem alfabética
router.get("/movies/alphabetical", async (req, res) => {
  const movies = await functions.alphabeticalOrder();
  if (movies.length > 0) {
    res.send(movies);
  } else {
    res.status(404).send("Nenhum filme foi encontrado.");
  }
});

// requisição ordem sequencial
router.get("/movies/sequential", async (req, res) => {
  const movies = await functions.sequentialOrder();
  if (movies.length > 0) {
    res.send(movies);
  } else {
    res.status(404).send("Nenhum filme foi encontrado.");
  }
});

//requisição ordem lançamento
router.get("/movies/movie-release", async (req, res) => {
  const movies = await functions.movieReleaseOrder();
  res.send(movies);
});

//requisição trilogia
router.get("/movies/trilogy/:trilogy", async (req, res) => {
  const movies = await functions.getTrilogy(req.params.trilogy);

  if (movies.length > 0) {
    res.send(movies);
  } else {
    res
      .status(400)
      .send(
        "Trilogia não encontrada, tente: classic, prequel, sequel ou spinoff."
      );
  }
});

module.exports = router;
