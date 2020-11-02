// Crear una función sumar que tome como argumento un array de números numeros y devuelva 
//la suma de ellos. Ejemplo:

const sumarNumeros = (numeros) =>{
    let suma = 0;
    for(numero of numeros){
        suma = suma + numero;
    }
    return suma;
   }
   console.log(sumarNumeros([5, 7, 10, 12, 24])); // 58