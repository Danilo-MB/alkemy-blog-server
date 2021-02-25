const Sequelize = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
    database.user,
    database.pass,
    database.database,
    { 
      host: database.host,
      dialect: "mysql"
    }
)

module.exports = sequelize;