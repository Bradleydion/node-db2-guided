const knex = require("knex")
const knexFile = require(".knexfile./knexfile")

module.exports = knex(knexFile.development)
