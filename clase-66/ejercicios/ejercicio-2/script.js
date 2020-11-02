/* Crear una función estaEnRango que tome como argumentos tres números, un valor,
 un número minimo y un número maximo, y devuelva true si el valor se encuentra entre
los números minimo y maximo o false si no (si el valor es igual a uno de los extremos 
se considera que está dentro del rango)
*/

/*const estaEnRango = (valor,n1,n2) =>{
    if ((valor >= n1) && (valor <= n2)) {
        return true;
    }else{
        return false;
    }
}*/
const estaEnRango = (valor, minimo, maximo) => (valor >= minimo) && (valor <= maximo);

console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false
