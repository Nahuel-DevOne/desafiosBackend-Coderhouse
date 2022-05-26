// const mongoose = require('mongoose');
// /** para conectarse a mongo con mongoose */
// mongoose.connect('mongodb://localhost:27017/coderhouse_mongo');

// /** para escuchar el evento y saber si esta conectado a mongo */
// mongoose.connection.on('connected', () => {
//     console.log('Conectado a MongoDB');
// });
// /** por si algo sale mal, se escucha el evento y se muestra por consola */
// mongoose.connection.on('error', (err) => {
//     console.log('Error de conexión', err);
// });


const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/coderhouse_mongo") //sino existe la db la crea

mongoose.connection.on("open",()=>{
    console.log("Base de datos conectada con exito")
})

mongoose.connection.on("error", ()=>{
    console.log("error al conectarse a la base de datos")
})


