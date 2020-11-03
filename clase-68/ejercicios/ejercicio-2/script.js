// Crear una función filtrarPorLongitud que tome como argumentos un número longitud 
//y un array de strings palabras y que devuelva un array con las palabras que tengan
// una cantidad de letras mayor a longitud. Ejemplo:

const filtrarPorLongitud = (longitud, palabras) => {
let filtrado = [];
for ( let i = 0; i < palabras.length; i++ ){
    if(palabras[i].length > longitud){
    filtrado.push(palabras[i]);
    }
}
return filtrado;
}


console.log(filtrarPorLongitud(4, [
    "dia",
    "remolacha",
    "azul",
    "sorpresa",
    "te",
    "verde",
  ])); // ['remolacha', 'sorpresa', 'verde']