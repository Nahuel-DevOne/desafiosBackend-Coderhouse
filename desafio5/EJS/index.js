const fs = require("fs");
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

//para guardar el producto del formulario de adicionar producto
app.post("/productCreated", async(req, res) => {
  // const { title, price, thumbnail } = req.body;
  // const id = await container.save({ title: title, price: price, thumbnail: thumbnail });
  // res.redirect(`/products/${id}`);

  //NOTA: PASAR ESTO AL MÉTODO SAVE DE CONTAINER
  const { title, price, thumbnail } = req.body;
  const data = await fs.promises.readFile(path, "utf8", function (err, data) {
    if (err) throw err;
    return JSON.parse(data);
  });
  const dataJson = JSON.parse(data);
  let lastProduct = dataJson[dataJson.length - 1];
  let id = lastProduct.id + 1;
  req.body.id = id;
  req.body.price = parseFloat(price);
  let product = { title: title, price: req.body.price, thumbnail: thumbnail, id: id };
  dataJson.push(product);
  fs.writeFileSync(path, JSON.stringify(dataJson), function (err) {
    if (err) throw err;
  });
  res.status(200).json(req.body);
});

/** Utilizando las rutas modularizadas */
app.use("/api", routes);

/** Corriendo en el servidor 8080 */
app.listen(PORT, ()=>{ 
  console.log("server run on port 8080");
});
