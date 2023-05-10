const { checkSchema } = require("express-validator");

const movieSchema = () =>
  checkSchema({
    name: {
      isString: {
        errorMessage: "Nome do filme deve ser um texto",
      },
      isEmpty: {
        negated: true,
        errorMessage: "Nome do filme é obrigatório",
      },
    },
    year: {
      isInt: {
        options: {
          min: 1900,
          max: 2100,
        },
        errorMessage:
          "Ano de lançamento deve ser um inteiro e deve estar entre 1900 e 2100",
      },
      isEmpty: {
        negated: true,
        errorMessage: "Ano de lançamento do filme é obrigatório",
      },
    },
    sequential: {
      isString: {
        errorMessage: "Sequencial do filme deve ser um texto",
      },
      isEmpty: {
        negated: true,
        errorMessage: "Sequencial do filme é obrigatório",
      },
    },
    trilogy: {
      isString: {
        errorMessage: "Trilogia do filme deve ser um texto",
      },
      isEmpty: {
        negated: true,
        errorMessage: "Trilogia do filme é obrigatório",
      },
    }
  });

module.exports = { movieSchema };
