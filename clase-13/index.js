const express = require('express'); //commonJS
// import express from 'express'; //ES Modules

const app = express();

/** arrow function */
const suma = (a, b) => a + b;

function suma2(a, b) {
    return a + b;
}

console.log(suma(1, 2));

// const RandomColor = () => {
//     const r = math.floor(math.random() * 256);
//     const g = math.floor(math.random() * 256);
//     const b = math.floor(math.random() * 256);

//     const rgb = `rgb(${r}, ${g}, ${b})`;
    
//     return rgb;
// }

// console.log(RandomColor()) 


app.listen(8080, () => {
    console.log('Servidor corriendo en el puerto 8080');
});