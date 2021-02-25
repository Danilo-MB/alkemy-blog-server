const Sequelize = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
    database.user,
    database.pass,
    database.database,
    { 
      host: database.host,
      port: '3306',
      dialect: "mysql"
    }
)

module.exports = sequelize;