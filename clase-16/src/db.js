const knex = require('knex')(
    {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '',
            database: 'users',
            charset: 'utf8'
        },
        pool: {
            min: 0,
            max: 8
        }
    }
)

knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email', 128);
    table.string('password');
})
    .then(() => {
        console.log('Table users created');
    })
    .catch((err) => {
        console.log(err);
    });


module.exports = knex;