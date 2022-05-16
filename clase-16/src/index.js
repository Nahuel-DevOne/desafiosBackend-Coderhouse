const express = require('express');
const knex = require("./db");

const app = express();

/** CRUD DE USUARIOS */

//middleware para formatear el body de la peticion
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** crear un usuario */
app.post('/', (req, res) => {
    let objNewUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    knex('users')
    .insert(objNewUser)
    // .then((id) => {
    //     res.send(id);
    //     }).catch((err) => {
    //         res.send(err);
    //     });
    .then(()=>{
        console.log(`Usuario ${objNewUser.name} creado`);
        res.send({message: `Usuario ${objNewUser.name} creado`});
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    });
});

/** obtener un usuario */
app.get('/user/:id', (req, res) => {
    // let id = req.params.id;
    // knex('users')
    // .where('id', id)
    // .first()
    // .then((user) => {
    //     res.send(user);
    // }).catch((err) => {
    //     res.send(err);
    // });

    knex.from('users').select("*").where({id: req.params.id})
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });

});

/** obtener todos los usuarios */
app.get('/all', (req, res) => {
    knex.from('users').select("*")
    .then((data) => {
        res.send(data);
        // res.send({data: data}); /** otra alternativa */
    }).catch((err) => {
        res.send(err);
    });
});

/** actualizar un usuario */
app.put('/updateUser/:id', (req, res) => {
    let id = req.params.id;
    let objUser = {
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password
    }
    knex('users')
    .where({id: id})
    .update(objUser)
    .then((id) => {
        res.send({data: `User updated`});
    }).catch((err) => {
        res.send(err);
    });
});

/** borrar un usuario */
app.delete("/deleteUser/:id", (req, res) =>{
    knex('users').where({id: req.body.id}).del()
    .then(()=>{
        res.send({data: `User deleted`});
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    });
})


app.listen(8080, () => {
    console.log('Server on port 8080');
});
