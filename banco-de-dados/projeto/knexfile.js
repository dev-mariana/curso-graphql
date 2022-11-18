const { connection } = require('./.env')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
    client: 'mysql2',
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
