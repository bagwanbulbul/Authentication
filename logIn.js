var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'navgurukul',
      database: 'authentication'
    },
  })
knex.schema.createTable('login', (table) => {
    table.increments('id')
    table.string("userName")
    table.string("password")

})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });
    
