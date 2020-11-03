/* Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y 
jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y
jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver 
un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe 
comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente.
Por ejemplo:
*/
const jugadasA = ["piedra", "piedra", "tijera"];
const jugadasB = ["papel", "tijera", "tijera"];

const jugarPiedraPapelTijeras = (jugadoraA, jugadoraB, jugadasA, jugadasB) => {
    puntosA = 0;
    puntosB = 0;
    for (let i = 0; i < jugadasA.length; i++) {
        if ((jugadasA[i] === "piedra") && (jugadasB[i] === "tijera") || (jugadasA[i] === "tijera") && (jugadasB[i] === "papel") || (jugadasA[i] === "papel") && (jugadasB[i] === "piedra")) {
            puntosA++;
        } else if ((((jugadasB[i] === "piedra") && (jugadasA[i] === "tijera") || (jugadasA[i] === "tijera") && (jugadasB === "papel") || (jugadasA[i] === "papel") && (jugadasB === "piedra")))) {
            puntosB++;
        }
    }
    if (puntosA > puntosB) {
        return "Gana: " + jugadoraA;
    } else if (puntosA < puntosB) {
        return "Gana: " + jugadoraB;
    } else {
        return "empate";
    }
}
// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate

console.log(jugarPiedraPapelTijeras("Ada", "Grace", ["tijera"], ["piedra"])); // Grace
console.log(jugarPiedraPapelTijeras("Ada", "Grace", ["papel"], ["papel"])); // Empate
console.log(jugarPiedraPapelTijeras(
    "Ada",
    "Grace",
    ["piedra", "papel", "papel", "piedra", "tijera"],
    ["papel", "piedra", "tijera", "tijera", "papel"]
)); // Ada