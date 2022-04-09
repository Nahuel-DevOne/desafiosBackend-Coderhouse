// console.log("hola mundo!");

const express = require('express');
const path = require('path');

const app = express();

/** para que el servidor en la nube le de el puerto */
const PORT = process.env.PORT || 8080;

let contador = 0;

app.get("/", (req, res)=>{  
    res.send(`<h1 style="color:blue">hola mundo! ${contador}</h1>`);
})

app.get("/productos", (req, res)=>{
    //con __dirname obtengo la ruta absoluta del proyecto
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/obj", (req, res)=>{
    let obj = {
        nombre: "juan",
        edad: 20,
        direccion: {
            calle: "calle 1",
            numero: "123"
        }
    }
    res.send(obj);
})

app.get("/obj2", (req, res)=>{
    res.json({message:"hola mundo, soy un objeto"});
})

app.get("/visitas", (req, res)=>{
    contador++;
    // res.send({visitas: contador});
    res.send(`<h1 style="color:blue">hola visitante ${contador}</h1>`);
})

app.listen(8080, ()=>{ 
    console.log("server run on port 8080");
});


