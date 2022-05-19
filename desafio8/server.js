/* MODULOS */
const express = require('express');
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const generateRandomProduct = require('./src/containers/FakerContainer')

const Container = require("./src/containers/Container");
const { optionsMySQL } = require("./src/utils/optionsMySQL");
const { optionsSQLite } = require("./src/utils/optionsSQLite");

const tableProducts = "products";
const tableMessages = "messages";

/* INSTANCIACION */
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const apiProducts = new Container(optionsMySQL, tableProducts);
const apiMessages = new Container(optionsSQLite, tableMessages);

let listProd = generateRandomProduct(5)

/* MIDDLEWARES */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./public/views");

//app.get('/api/productos-test', (req,res)=> {res.status(200).json(listProd)})

/* WEBSOCKET */
io.on("connection", async (socket) => {
    console.log(`Nuevo cliente conectado ${socket.id}`);
    //------- Enviar histórico de productos
    socket.emit("products", await apiProducts.listAll());
  
    //------- Escuchar nuevos productos
    socket.on("newProduct", async (product) => {
      console.log(product);
      await apiProducts.save(product);
  
      //Actualización de la vista de productos
      io.sockets.emit("products", await apiProducts.listAll());
      console.log(await apiProducts.listAll());
    });
  
    //------- Enviar histórico de mensajes
    socket.emit("messages", await apiMessages.listAll());
  
    //------- Escuchar nuevos mensajes
    socket.on("newMessage", async (msg) => {
      msg.date = new Date().toLocaleString();
      const message = {
        author: msg.email,
        msg: msg.text,
        date: msg.date,
      }
      await apiMessages.save(message);
  
      //Actualización de la vista de mensajes
      io.sockets.emit("messages", await apiMessages.listAll());
    });
});

app.get('/', (req, res) => {res.render('index', {listProd});})
app.get('/api/productos-test', (req, res) => {res.render('fakeProd', {listProd: listProd});})


/* SERVIDOR */
const PORT = 8080;

const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchado en puerto http://localhost:${server.address().port}`);
  console.log(listProd);
});

server.on("error", (error) => console.error(`Error en servidor ${error}`));