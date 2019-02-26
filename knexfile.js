// Update with your config settings.

const pg = require('pg');
pg.defaults.ssl = true;


module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/dev.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations"
    },
    seeds: { directory: "./data/seeds" }
  }
};
