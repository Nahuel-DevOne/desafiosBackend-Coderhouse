const express = require('express');
const knex = require("./db");



const app = express();


/** crear un usuario */
app.post('/', (req, res) => {
    let objNewUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    knex('users')
    .insert(objNewUser)
    .then((id) => {
        res.send(id);
        }).catch((err) => {
            res.send(err);
        });
});

/** obtener un usuario */
app.get('/:id', (req, res) => {
    let id = req.params.id;
    knex('users')
    .where('id', id)
    .first()
    .then((user) => {
        res.send(user);
    }).catch((err) => {
        res.send(err);
    });
});

/** obtener todos los usuarios */
app.get('/', (req, res) => {
    knex('users')
        .select('*')  // seleccionar todos los campos
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
        });
});

/** actualizar un usuario */
app.put('/updateUser/:id', (req, res) => {
    let id = req.params.id;
    let objUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    knex('users')
    .where({id: id})
    .update(objUser)
    .then((id) => {
        res.send(id);
    }).catch((err) => {
        res.send(err);
    });
});

/** borrar un usuario */


app.listen(8080, () => {
    console.log('Server on port 8080');
});
