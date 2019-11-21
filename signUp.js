var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'navgurukul',
      database: 'authentication'
    },
    pool: { min: 0, max: 7 }
  })
knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('emailId').unique()
    table.string('userName')
    table.string('password')
})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });
    