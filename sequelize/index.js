const {Sequelize} = require('sequelize');


const database = new Sequelize({
    dialect: 'sqlite',
    // dialect: 'mysql',
    // host: 'localhost',
    // port: 3306,
    // username: 'root',
    // password: 'root',
    database: 'root'
});




module.exports = database;
