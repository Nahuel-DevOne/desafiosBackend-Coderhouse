"use strict";

var express = require('express'); //commonJS
// import express from 'express'; //ES Modules


var app = express();
/** arrow function */

var suma = function suma(a, b) {
  return a + b;
};

function suma2(a, b) {
  return a + b;
}

console.log(suma(1, 2));
app.listen(8080, function () {
  console.log('Servidor corriendo en el puerto 8080');
});