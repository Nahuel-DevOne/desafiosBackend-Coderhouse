// console.log("hola Mundo!");

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url === "/"){
        // res.write("<h1>Hola Mundo!</h1>");
        // res.end()
        res.end("Hola Mundo desde res.end");
    }
    if(req.url === "/productos"){
        res.end("Hola productos desde res.end");
    }
    if(req.url === "/hora"){
        let start = moment().format("HH:mm");
        res.end(`Hola la hora es: ${start}`);
    }
})

server.listen(8080, ()=>{  
    console.log("servidor hhtp escuchando el puerto 8080");
})

