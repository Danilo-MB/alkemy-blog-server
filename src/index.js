const express = require('express');
const Sequelize = require('sequelize');
const Post = require('./models/post');
const sequelize = require('./database/db');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Checkeando la conexión
sequelize.authenticate().then( () => {
    console.log("Connection OK")
    }).catch( err => console.log("error ", err)
);

// Conexión y creación de la base de datos (sync({forece: flase})) y tablas
app.listen(port, () => {
    console.log("Running on port " + port);
    sequelize.sync({force: true}).then( () => {
        console.log("Conexión a la base de datos exitosa");
    }).catch(err => console.log("error", err));
} );

app.get('/posts', async (req, res) => {
    res.send(await Post.findAll());
});

app.post('/posts', async (req, res) => {
    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        category: req.body.category
    })
    res.status(200);
    res.send(post);
});

app.get('/posts/:id', async (req, res) => {
    const post = await Post.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200);
    res.send(post);
});

app.delete('/posts/:id', async (req, res) => {
    const rows = await Post.destroy({
        where: {
            id: req.params.id
        }
    })
    if(rows > 0){
        res.status(200);
        res.send({message: "Deleted post id # " + req.params.id});
    }else{
        res.status(404);
        res.send({message: "No post deleted"});
    }
});

app.patch('/posts/:id', async (req, res) => {
    const post = await Post.update({
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        category: req.body.category
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    if(post){
        res.send({message: "Updated Post # " + req.params.id});
    }else{
        res.send({message: "No post updated."});
    }
});






















// const connection = new Sequelize("alkemy_blog", "root", "admin", {
//     host: "localhost",
//     dialect: "mysql",
// });  // Instancia duplicada, ya existia sequelize en database/db