// Crear una función crearCuentaRegresiva que tome como argumento un número entero 
//numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás 
//ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

const crearCuentaRegresiva = (numeroInicial) =>{
    let array = [];
    while (numeroInicial > -1){
       array.push(numeroInicial)
       numeroInicial = numeroInicial - 1;
    }
    return array;
}

console.log(crearCuentaRegresiva(3)); // [3, 2, 1, 0]
console.log(crearCuentaRegresiva(5)); // [5, 4, 3, 2, 1, 0]