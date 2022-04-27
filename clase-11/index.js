const express = require("express");

const app = express();


/** DATA */
let mensajes = [
    // {nombre: "Juan", msj: "Hola"},
    // {nombre: "Nahuel", msj: "Hola, bien"}
];

/** ARCHIVOS ESTÁTICOS */
app.use(express.static(__dirname + "/public"));

/** SERVER */
const http = require("http");
const server = http.createServer(app);

/** SOCKET.IO */
const {Server} = require("socket.io");
const io = new Server(server);

/** CONNECTION */
io.on("connection", (socket) => {

    console.log("nueva conexion");
    socket.emit("mensajes", mensajes);
    
    socket.on("message_client", (data) => { 
        console.log(data)
    });

    socket.on("dataMsj", (data) => { 
        console.log(data);
        mensajes.push(data);
        // socket.emit("mensajes", mensajes);
        io.sockets.emit("mensajes", mensajes);
    });
});


app.get("/chat",()=>{
    res.sendFile(__dirname + "/public/chat.html");
// app.get("/chat",()=>{
//     res.sendFile(__dirname + "/public/chat.html");
})


server.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080");
});
