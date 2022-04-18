const express = require('express');
const app = express();
const routes = require("./api/routes");
const PORT = 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/***** ya no es necesario utilizar body parser, ya que express lo incluye por defecto en la instalación *****/
// const bodyParser = require("body-parser"); /** ya no es necesario */
/***** y estas dos líneas: *****/
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
/** Pueden ser reemplazadas por estas dos: */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/** Utilizando las rutas modularizadas */
app.use("/api", routes);

/** Corriendo en el servidor 8080 */
app.listen(PORT, ()=>{ 
  console.log("server run on port 8080");
});
