// console.log("hola mundo");

const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, ()=>{
  console.log("server run on port 8080");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

// - Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
// 	GET: devolverá la lista requerida en formato objeto.
// POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato: 
// Persona -> { "nombre": ..., "apellido": ..., "edad":... }
// Mascota -> { "nombre":..., "raza":..., "edad":... }
