/** Array de objetos */
/** Obtener del siguiente array
 * A) Los nombres de los productos en un string separados por comas
 * B) El precio total
 * C) El precio promedio
 * D) El producto con menor precio
 * E) El producto con mayor precio
 * F) Con los datos de los puntos anteriores, crear un objeto y representarlo por consola
 */

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

// console.log(productos);
/** A) */
// const arrNombres = productos.map(x => {
//     return x.nombre
// })
// console.log(arrNombres);

// let stringNombres = arrNombres.join(",");
// console.log(stringNombres)

/** B) */
// let acumulador = 0;
// productos.map( x=>{
//     acumulador = acumulador + x.precio 
// })

// const dato = productos.reduce((a, b) => a + (b.precio), 0).toLocaleString('de', {maximumFractionDigits: 2})
// console.log(dato);

const total = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio
}, 0)

console.log(total)

// console.log(acumulador);

/** C) */
// console.log(acumulador/productos.length);
