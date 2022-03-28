function obtenerMayor(x,y){
    //x e y son números enteros (int)
    //Devuelve el número más grande
    //Si son iguales,devuelve cualquiera de los dos
    //tu código
    if(typeof x === 'number' && typeof y === 'number'){
        if( x === y ){
            return x
        } else if( x > y ){
            return x
        }else if( y > x ){
            return y
        }
    }
    return 'los números no son válidos'
}

// console.log(obtenerMayor(4,5));
// console.log(obtenerMayor(100,20));

/** de otra manera */
// function obtenerMayor(x,y){
// 	if (Number.isInteger(x) && Number.isInteger(y)){
// 		if (x >= y){
//             return x
//         }else{
//             return  y
//         }
// 	}
// }

/** callbacks */

const suma = (a, b) =>{
    return a + b
}
const resta = (a, b) =>{
    return a - b
}
const multiplica = (a, b) =>{
    return a * b
}
const divide = (a, b) =>{
    return a / b
}
const calcula = (a, b, callback ) =>{
    return callback(a,b);
}

console.log(calcula(2,3, suma));
console.log(calcula(2,3, resta));
console.log(calcula(2,3, multiplica));
console.log(calcula(2,3, divide));

