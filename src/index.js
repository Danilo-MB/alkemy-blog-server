const express = require('express');
const Sequelize = require('sequelize');
const Post = require('./models/post');
const sequelize = require('./database/db');

const app = express();
const port = process.env.PORT || 3000;

const connection = new Sequelize("alkemy_blog", "root", "admin", {
    host: "localhost",
    dialect: "mysql",
});

connection.authenticate().then( async () => {
    console.log("Connection OK")
}).catch( err => console.log("error ", err));




app.listen(port, () => {
    console.log("Running on port " + port);
    sequelize.sync({forece: false}).then( () => {
        console.log("Conexión a la base de datos exitosa");
    }).catch(err => console.log("error", err));
} )