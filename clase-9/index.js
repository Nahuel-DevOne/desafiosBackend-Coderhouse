const express = require("express");
const app = express();
const multer = require("multer");

/** storage */
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

let upload = multer({ storage });


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", upload.single('file'), (req, res) => {
    console.log(req.file);
    let file = req.file;
    if(!file){
        return res.status(400).send({message: 'No file uploaded'});
    }
    // res.send(file);
    res.send({ message: "archivo cargado correctamente"})
});

app.listen(8080, () => {
    console.log("server run on port 8080");
});