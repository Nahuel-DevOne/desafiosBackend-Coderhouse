const fs = require("fs");
const Container = require("./Container");
const fileName = "products.json";

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

const file = new Container(fileName);

/** muestra el arreglo de objetos con todos los productos. Si no hay nada, trae un arreglo vacío */
file.getAll();

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