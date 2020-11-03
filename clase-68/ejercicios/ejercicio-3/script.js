/* Crear una función recortar que tome como argumentos un número cantidadLetras y 
un array de strings palabras y devuelva un array con las mismas palabras pero recortadas.
Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás.
Por ejemplo, elefante recortada a 4 letras queda elef.
*/
const recortar = (cantidadLetras, palabras) =>{
    let palabraRecortada = "";
    let nuevoArray = [];
    for (let i = 0; i<palabras.length; i++){
      palabraRecortada = palabras[i].substring(0,cantidadLetras);
      nuevoArray.push(palabraRecortada)

    }return nuevoArray; 
}

console.log(recortar(4, ["elefante", "dinosaurio", "chocolate", "avion", "america"])); // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
console.log(recortar(1, ["algoritmo", "bug", "compilador"])); // ['a', 'b', 'c']