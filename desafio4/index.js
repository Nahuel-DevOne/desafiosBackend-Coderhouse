const fs = require("fs");
const Container = require("./Container");
const fileName = "products.json";

const express = require('express');
const path = require('path');
const app = express();

try {
  if (!fs.existsSync(fileName)) {
    fs.open(fileName, "w", function (err, file) {
      if (err) throw err;
      console.log(`${fileName} was created`);
    });
    fs.writeFileSync(fileName, "[]", {encoding: "utf-8"});
  }
} catch (error) {
  console.log(error);
}

/** Ruta que devuelve un array con todos los productos */
app.get("/productos", (req, res) => {
  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) throw err;
    const json = JSON.parse(data);
    res.send(json);
  });
});

/** Ruta que devuelve un producto elegido al azar */
app.get("/productoRandom", (req, res) => { 
  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) throw err;
    const json = JSON.parse(data);
    const random = Math.floor(Math.random() * json.length);
    res.send(json[random]);
  });
})

/** Corriendo en el servidor 8080 */
app.listen(8080, ()=>{ 
  console.log("server run on port 8080");
});

const file = new Container(fileName);

/** muestra el arreglo de objetos con todos los productos. Si no hay nada, trae un arreglo vacío */
// file.getAll();

/** para guardar un objeto en el arreglo de objetos products.json */
// file.save({
//   title: "Lapicera",
//   price: 100,
//   thumbnail:
//     "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
// })

/** Para traer y mostrar por consola, un objeto del arreglo por su ID */
// file.getItemById(2); 

/** para borrar un objeto del arreglo usando su respectivo ID. Si no encuentra el ID, retorna null */
// file.deleteItemById(2);

/** Borra todos los objetos del arreglo */
// file.deleteAll();