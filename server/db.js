const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
      host: process.env.PGHOST,
      dialect: 'postgres'
    }
)



// 'study',
// 'postgres',
// 'root',
// {
//     host: 'localhost',
//     dialect: 'postgres'
// }