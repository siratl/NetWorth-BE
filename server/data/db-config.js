const knex = require("knex");

const knexfile = require("../knexfile.js");
const dbEnv = process.env.NODE_ENV || "development";

module.exports = knex(knexfile[dbEnv]);
