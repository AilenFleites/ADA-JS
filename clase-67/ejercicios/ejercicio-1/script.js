// Crear una función obtenerMenor que tome como argumento un array de números numeros 
// y devuelva el menor de ellos. Ejemplo:
const obtenerNumeroMenor = (numeros) => {
    let menor = numeros[0];
    for ( let i = 0; i < numeros.length; i++ ){
        if (numeros[i] < menor){
            menor = numeros[i];
        }
    } 
    return menor;
}


console.log(obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12])); // 2
