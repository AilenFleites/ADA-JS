// Crear una funcióm crearUsuario que reciba como argumento un callback. 
//La función debe pedir mediante un prompt ingresar el nombre de un usuario, 
//y luego ejecutar el callback.

const confirmarCreacion = (callback) => {
    const user = prompt("Por favor, ingrese su nombre:");
    callback(user);
     // callback
}

const crearUsuario = (user) =>{
    alert(` Bienvenid@ ${user}!`);
}
//confirmarCreacion(crearUsuario);

// Crear una función validarUsuario que reciba como argumento un callback validador. 
//El callback debe ser una función que tome un string como argumento, haga alguna validación, 
//y devuelva true o false si pasa dicha validación o no. La funci´ón validarUsuario, 
//al ejecutarse, debe pedir mediante un prompt ingresar el nombre de un usuario, 
//pasar dicho nombre como argumento del callback validador y en base a lo que el callback 
//devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.

const validarUsuario = (callback) =>{
const user = prompt("Ingrese su usuario: ");
if (callback(user) === true){
    alert("Usuario correcto!");
}else{
    alert("El usuario ingresado es incorrecto");
}
}

const validador = (str) =>{
if(str.length >= 6){
    return true;
}else{
    return false;
}
}
//validarUsuario(validador);

// Ejemplos de validaciones (solo tiene que validar una de ellas):

// - que no tenga espacios
// - que tenga más de X caracteres
// - que no tenga números
// - que tenga mayúsculas

// Crear una función map que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - obtenga el resultado
// - lo pushee a un nuevo array
// - devuelva el array final con el resultado de cada una de las llamadas al callback.
const numeros = [1, 2, 3];

const map = (numeros,callback) =>{   
const nuevoArray = [];
for (const numero of numeros) {
    nuevoArray.push(callback(numero));
}
return console.log(nuevoArray);
}

const duplicar = (x) => x * 2;

//map(numeros,duplicar);

// Ejemplo:
// 
// const duplicar = (x) => x * 2
// map(numeros, duplicar) // [2, 4, 6]

// Crear una función filter que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - si dicho callback devuelve true, pushea el elemento a un nuevo array
// - devuelva el array final con los elementos que pasaron el "filtro".
const numbers = [10, 2, 3, 40, 33, 50]
const filter = (array, callback) =>{
const result = [];
for (const item of array) {
    if (callback(item) === true ){
        result.push(item);
    }
}
return console.log(result);
}
const filtro = (n) =>{
if (n > 10){
    return true;
}
else{
    return false;
}
}
//filter(numbers,filtro);

// Ejemplo:
// 
// const multiploDe10 = (x) => x % 10 === 0
// filter(numeros, multiploDe10) // [10, 40, 50]

// Crear una función every que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si todas las llamadas al callback devolvieron true

const every = (array, callback) =>{
for (const item of array) {
    if (callback(item) === false){
        return false;
    }
}
return true;
}
const esPositivo = (x) => x >= 0;
//console.log(every(numbers, esPositivo));
//console.log(every(numbers, filtro));
// Ejemplo:

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

// every(numeros, multiploDe10) // false
// every(numeros, esPositivo) // true


// Crear una función some que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si al menos una de las llamadas al callback devolvió true

const some = (array, callback) =>{
for (const item of array) {
    if (callback(item) === true){
        return true;
    }else{
        return false;
    }
}
}
const multiploDe10 = (x) => {
    if( x % 10 === 0){
    return true;
    }
    else{
        return false;
    }
}
//console.log(some(numbers, esPositivo)); // true
//console.log(some(numbers, multiploDe10)); // true

// Crear una función find que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

const find = (array, callback)=>{

for (const item of array) {
    if (callback(item) === true){
        return true;
    }
}
return undefined;
}
const numeros1 = [8, 2, 3, 40, 33, 50]
//console.log(find(numeros1, multiploDe10) )// 40

// Crear una función findIndex que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

const findIndex = (array, callback) =>{
for (let i = 0; i <array.length; i++) {
    if (callback(array[i]) === true){
        return i;
    }
}
return undefined;
}
//console.log(findIndex(numeros1, multiploDe10)) // 3

// Crear una función dropWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos a partir del primer callback que devolvió false

// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback
// de true, no los agrega, cuando el callback da false por primera vez agrega todos los
// elementos restantes a partir de dicho elemento inclusive)
const dropWhile = (array, callback)=>{
const nuevoArray =[];
 for (let i = 0 ; i<array.length ; i ++) {
     if (callback(array[i])=== false){
        while (i < array.length){
            nuevoArray.push(array[i]);
            i++;
        }
        return nuevoArray;
    }
 }
}
const numeros2 = [40, 30, 50, 8, 2, 3, 20]
//console.log(dropWhile(numeros2, multiploDe10) );// [8, 2, 3, 20]

// Crear una función takeWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos hasta el primer callback que devolvió false
const takeWhile = (array,callback)=>{
    const nuevoArray =[];
    for (let i = 0 ; i<array.length ; i ++) {
        while(callback(array[i]) === true){
               nuevoArray.push(array[i]);
               i++;
           }
        if (callback(array[i]) === false){
            break;
        }
       }
       return nuevoArray;
    }
// (Inverso del dropWhile)
const numeros3 = [40, 50, 33, 8, 2, 3, 20]

console.log(takeWhile(numeros3, multiploDe10)); // [40, 50]
