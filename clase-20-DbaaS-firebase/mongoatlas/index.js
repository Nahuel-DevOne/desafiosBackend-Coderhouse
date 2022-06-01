const mongoose = require("mongoose");
const { Schema, model } = mongoose;


mongoose.connect("mongodb+srv://DevOne:TiloChiruza6807@cluster0.td09s.mongodb.net/ecommerce1?retryWrites=true&w=majority");

mongoose.connection.on("open", () => {
    console.log("Base de datos a Mongo atlas conectada");
});

mongoose.connection.on("error", (err) => {
    console.log("Error al conectar a Mongo atlas", err);
});

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:Number
});

model("user", productSchema)