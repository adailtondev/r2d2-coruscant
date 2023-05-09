const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// função que busca todos os filmes
const allMovies = async () => {
  const movies = await prisma.movie.findMany();
  return movies;
};

// função que adiciona um filme
const addMovie = async (movie) => {
  await prisma.movie.create({
    data: movie,
  });
};

//função que retorna se um filme já existe na lista
const existentMovie = async(movie) => {
  const exists = await prisma.movie.findMany({
    where: {
      name: {
        contains: movie.name,
        mode: 'insensitive'
      }
    }
  })
  return exists
}

// função que remove um filme
const removeMovie = async (id) => {
  await prisma.movie.delete({
    where: {
      id: id,
    },
  });
};

// função que atualiza um ou mais dados de um filme
const updateMovie = async (movie, id) => {
  await prisma.movie.update({
    where: {
      id: id,
    },
    data: movie,
  });
};

// função que retorna a lista em ordem alfabética
const alphabeticalOrder = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return movies;
};

// função que retorna a lista em ordem senquencial
const sequentialOrder = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      sequential: Number.parseInt().asc,
    },
  });
  return movies;
};

// função que retorna a lista em ordem de lançamento
const movieReleaseOrder = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      year: "asc",
    },
  });
  return movies;
};

// função que retorna a trilogia solicitada
const getTrilogy = async (trilogy) => {
  const movies = await prisma.movie.findMany({
    where: {
      trilogy: trilogy,
    },
  });
  return movies;
};



module.exports = {
  allMovies,
  addMovie,
  removeMovie,
  updateMovie,
  alphabeticalOrder,
  sequentialOrder,
  movieReleaseOrder,
  getTrilogy,
  existentMovie
};
