const { Sequelize, DataTypes, Model } = require('sequelize');
const { database } = require('../config');
const sequelize = require('../database/db');


class Post extends Model {}

Post.init(
    {
    id: {
            type: DataTypes.NUMBER,
            primaryKey: true
        },
     title: DataTypes.STRING,
     content: DataTypes.STRING,
     imageUrl: DataTypes.STRING,
     category: DataTypes.STRING,
     created_at: DataTypes.DATE   
    },
    {
     sequelize,
     modelName: "post"     

    });

module.exports = Post;