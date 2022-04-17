// const fs = require("fs");
// const Container = require("./Container");
// const fileName = "products.json";
// const path = require('path');
const express = require('express');
const app = express();
const routes = require("./api/routes");
const PORT = 8080;


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/***** ya no es necesario utilizar body parser, ya que express lo incluye por defecto en la instalación *****/
// const bodyParser = require("body-parser"); /** ya no es necesario */
/***** y estas dos líneas pueden ser reemplazadas *****/
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
/** Por estas dos: */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/** Utilizando las rutas modularizadas */
app.use("/api", routes);

/** Corriendo en el servidor 8080 */
app.listen(PORT, ()=>{ 
  console.log("server run on port 8080");
});


// try {
//   if (!fs.existsSync(fileName)) {
//     fs.open(fileName, "w", function (err, file) {
//       if (err) throw err;
//       console.log(`${fileName} was created`);
//     });
//     fs.writeFileSync(fileName, "[]", {encoding: "utf-8"});
//   }
// } catch (error) {
//   console.log(error);
// }

// const file = new Container(fileName);

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