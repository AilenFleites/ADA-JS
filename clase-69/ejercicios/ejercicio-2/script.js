// Crear una función repetir que tome como argumento un valor valor y un número entero 
//cantidad, y devuelva una array con valor repetido cantidad de veces.
const repetir = (valor,cantidad) =>{
    const array = [];
    for (let i = 0; i< cantidad; i++){
        array.push(valor); 
    }
    return array; 
}
console.log(repetir("lovelace", 3)); // ['lovelace', 'lovelace', 'lovelace']
console.log(repetir("a", 5)); // ['a', 'a', 'a', 'a', 'a']
console.log(repetir("html", 0)); // []