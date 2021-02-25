const { Sequelize, DataTypes, Model } = require('sequelize');
const { database } = require('../config');
const sequelize = new Sequelize();


class Post extends Model {}

Post.init(
    {
     id: DataTypes.INTEGER,
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