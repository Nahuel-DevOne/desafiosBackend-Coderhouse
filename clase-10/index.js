const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

let arr = [
    {
        name: "cable",
        price: "100",
    },
    {
        name: "cargador",
        price: "100",
    },
    {
        name: "USB",
        price: "100",
    },
    {
        name: "celu",
        price: "100",
    }
]

app.set("views", "./views");
app.set("view engine", "hbs");

app.engine("hbs", engine({ 
    extname: ".hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "./views/layouts",
    partialsDir: __dirname + "views/partials",
}));


app.get("/", (req, res) => {
    res.render("main", {name: "Nahuel"});
});

app.get("/products", (req,res) => {
    res.render("products", {data: arr})
});

app.listen(8080, () => { 
    console.log("Server running on port 8080"); 
});
