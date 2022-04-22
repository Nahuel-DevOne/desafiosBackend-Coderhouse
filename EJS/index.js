// const express = require("express");
// const app = express();

// let arr = [
//     {
//         name: "cable",
//         price: "100",
//     },
//     {
//         name: "cargador",
//         price: "100",
//     },
//     {
//         name: "USB",
//         price: "100",
//     },
//     {
//         name: "celu",
//         price: "100",
//     }
// ]

// app.set("views", "./views");
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.render("index", {name: Nahuel});
// });

// app.get("/products", (req,res) => {
//     res.render("products", {data: arr})
// })


// app.listen(8080, () => { 
//     console.log("Server running on port 8080"); 
// });

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
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index", {name:"EJS"})
})
app.get("/products", (req,res)=>{
    res.render("products", {data:arr})
})

app.listen(PORT, () => {
  console.log("Server Run on port: " + PORT);
});
