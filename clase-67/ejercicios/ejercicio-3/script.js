// Crear una función contiene que tome como argumentos un número numero y 
//un array de números numeros y devuelva true o false dependiendo de si dicho numero 
//se encuentra en el array de numeros. Ejemplo:

const contiene = (numero, numeros) => {
    if (numeros.includes(numero)) {
        return true;
    }else{
        return false;
    }
}
 console.log (contiene(5,[5, 7, 10, 12, 24]));
 console.log (contiene(8,[5, 7, 10, 12, 24]));