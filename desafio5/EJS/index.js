const express = require('express');
const app = express();
const routes = require("./api/routes");
const Container = require("./container");
const path = "./products.json";
const container = new Container(path);
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//para usar el motor de plantilla ejs
app.set("view engine", "ejs");

//para renderizar el formulario de adicionar producto
app.get("/", (req, res) => {
  res.render("formAddProduct.ejs");
});

//para renderizar la vista de todos los productos
app.get("/products", async(req, res) => {
  res.render("index.ejs", { products: await container.getAll() });
});

/** Utilizando las rutas modularizadas */
app.use("/api", routes);

/** Corriendo en el servidor 8080 */
app.listen(PORT, ()=>{ 
  console.log("server run on port 8080");
});
