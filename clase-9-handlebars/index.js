const express = require("express");
const app = express();
const { engine } = require("express-handlebars");



app.engine("hbs", engine({  
    extname: ".hbs",
    defaultLayout: "main.hbs",
    partialsDir: __dirname + "views/partials",
}));

app.get("/", (req, res) => { 
    // res.sendFile("index.html", { root: __dirname });
    res.render("index");
});


app.set("views engine", "hbs");
app.set("views", "./views");