//// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y
// devuelva true si son iguales y false sino. 
//Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

const gano = (tragamonedas) =>{
for (let i = 0; i < 4; i++){
    if (tragamonedas[i] !== tragamonedas[i+1]){
        return false;
    }
}
return true;
}
console.log(gano(["X", "X", "X", "O", "O"])); // false
console.log(gano(["O", "O", "O", "O", "O"])); // true
console.log(gano(["O", "O", "O", "O", "O"])); // true
