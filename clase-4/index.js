const { deepStricEqual } = require("assert");
const fs = require("fs");

/** De forma sincrónica */
let readFile = fs.readFileSync("./test.txt", {encoding: "utf-8"});

console.log(readFile);

fs.writeFileSync("./test.txt", "Nuevo comentario dentro del txt", {encoding: "utf-8"});

let obj = [{
    name: "Nahuel",
    lastName: "Lopez"
    },
    {
    name: "Nahuel",
    lastName: "Lopez"
    },
    {
    name: "Nahuel",
    lastName: "Lopez"
    }
]



/** De forma asincrónica */
