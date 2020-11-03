// Crear una función multiplicar que tome como argumentos un número multiplicador y un array 
//de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento
// del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:
const multiplicar = (muntiplicador,numeros) =>{
    for (let i = 0; i<numeros.length; i++){
        numeros = (numeros[i] * multiplicador);
    }
    return numeros;
}
console.log(multiplicar(2, [5, 7, 15, 22, 40])); // [10, 14, 30, 44, 80]
multiplicar((10, [2, 5, 77])); // [20, 50, 770]
