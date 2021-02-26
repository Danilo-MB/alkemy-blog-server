const Sequelize = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
    database.database,
    database.user,
    database.pass,
    { 
      host: database.host,
      port: '3306',
      dialect: "mysql"
    }
)

module.exports = sequelize;