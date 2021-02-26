const { Sequelize, DataTypes, Model } = require('sequelize');
const { database } = require('../config');
const sequelize = require('../database/db');


class Post extends Model {}

Post.init(
    {
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
     title: DataTypes.STRING,
     content: DataTypes.STRING,
     imageUrl: DataTypes.STRING,
     category: DataTypes.STRING,  
    },
    {
     sequelize,
     modelName: "post"     

    });

module.exports = Post;