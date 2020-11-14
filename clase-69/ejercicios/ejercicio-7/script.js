// Crear una función repetirLetras que tome como argumento un string palabra y un número entero
// cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.
const repetirLetras = (palabra,cantidad) =>{
    for (let i = 0; i< palabra.length; i++){
        palabra.charAt(i) * cantidad;
    }
}
repetirLetras("hola", 2); // 'hhoollaa'
repetirLetras("ada", 3); // 'aaadddaaa'
repetirLetras("ah!", 5); // 'aaaaahhhhh!!!!!'
repetirLetras("basta", 1); // 'basta'