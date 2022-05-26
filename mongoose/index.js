/** conectando mongoose con Mongo */
const mongoose = require("mongoose");
//no funciona con localhost en la última versíón 17 de Node.js
mongoose.connect("mongodb://127.0.0.1:27017/movieApp", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected to MongoDB");
});

