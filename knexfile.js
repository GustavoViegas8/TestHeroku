// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'revenda',
      user: 'root',
      password: '123456',
    }
  },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'database/migrations'
    },
    seeds :{
      directory: 'database/seeds'
    }
}
