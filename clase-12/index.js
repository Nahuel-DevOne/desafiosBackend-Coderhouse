const express = require("express");
const router = require("./routes/index");
const app = express();

/** data */
let msj = [];

const port = process.env.PORT || 8080;

/** estáticos */
app.use(express.static(__dirname + "/public"));

/** server */
/** exigencia de io */
const http = require("http")
const server = http.createServer(app);

/** socket.io */
const { Server } = require("socket.io");
const io = new Server(server);

/** conexión de socket */
io.on("connection", (socket) => {
    console.log("nueva conexión");
    
    // socket.emit("mensaje-back", msj);
    /** escuchar evento de mensajes */
    socket.on("dataMsj", (data) => {
        msj.push(data);
        // socket.emit("mensaje-back", msj);
        io.sockets.emit("mensaje-back", msj);
    });
})

//routes
app.use("/api", router);

server.listen(port, () => {
    console.log("Servidor corriendo en el puerto 8080");
});

