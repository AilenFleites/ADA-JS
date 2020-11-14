// Crear una función removerDuplicados que tome como argumento un array array y que devuelva 
//un array con los mismos valores de array pero sin valores duplicados.

const removerDuplicados = (array) =>{
    nuevoArray = [];
    for (let i = 0; i< array.length; i++){
       if (!nuevoArray.includes(array[i])){
           nuevoArray.push(array[i]);
       } 
    }return nuevoArray;
}

console.log(removerDuplicados([1, 1, 1])); // [1]
console.log(removerDuplicados([1, 1, 2, 2, 3, 3])); // [1, 2 ,3]
console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23])); // [5, 23 ,8, 44]