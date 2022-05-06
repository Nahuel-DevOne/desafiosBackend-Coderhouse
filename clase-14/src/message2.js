// Crear tres archivos javascript que contengan una variable por cada archivo llamadas mensaje1, mensaje2 y mensaje3 respectivamente. 
// En cada archivo, cargar la variable con un frase y representarla en consola luego de:
// Un segundo para el caso del mensaje 1.
// Dos segundos para el mensaje 2. 
// Tres segundos para el mensaje 3.
// Crear un proyecto que permita utilizar webpack como dependencia de desarrollo para empaquetar los tres archivos en uno sólo.
// Escribir el script correspondiente para ejecutar el proceso automático, generando la versión de producción del proyecto.


const saludo2 = (msj) => {
    
    console.log(`Hola ${msj}`);
}

const saludoTimeOut2 = setTimeout(saludo2, 2000, 'Fulano');

module.exports = saludoTimeOut2;