const fs = require("fs");
const express = require('express');
const app = express();
const Container = require("./container");
const path = "./products.json";
const container = new Container(path);
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** para usar Handlebars */
var handlebars = require("express-handlebars").create({
    defaultLayout: "main",
  });
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

//para renderizar el formulario de adicionar producto
app.get("/", (req, res) => {
  res.render("formAddProduct.hbs");
});

//para renderizar la vista de todos los productos
app.get("/products", async (req, res) => {
  res.render("index.hbs", { products: await container.getAll() });
});

//para guardar el producto del formulario de adicionar producto
app.post("/productCreated", async (req, res) => {

  const { title, price, thumbnail } = req.body;
  id = req.body.id 
  req.body.price = parseFloat(price);
  let product = { title: title, price: req.body.price, thumbnail: thumbnail, id: id };

  res.render("productCreated.hbs", { product: await container.save(product) });

  res.status(200).json(req.body);

});

/** Corriendo en el servidor 8080 */
app.listen(PORT, () => {
  console.log("server run on port 8080");
});