const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
let arr = [
    {
        name:"Cable",
        price:1000
    },
    {
        name:"Cargador",
        price:9000
    },
    {
        name:"Auriculares",
        price:15000
    }
]


app.set("views", "./views")
app.set("view engine", "pug");

app.get("/", (req,res)=>{
    res.render("index", {name:"pug"})
})
app.get("/products", (req,res)=>{
    res.render("products", {data:arr})
})

app.listen(PORT, () => {
  console.log("Server Run on port: " + PORT);
});
