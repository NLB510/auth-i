// Update with your config settings.

const pg = require('pg');
pg.defaults.ssl = true;


module.exports = {
  development: {
    client: "pg",
    connection: {
      filename: process.env.DATABASE_URL
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: { directory: "./data/seeds" },
    pool: {
      min: 2,
      max: 10
    }
  }
};
