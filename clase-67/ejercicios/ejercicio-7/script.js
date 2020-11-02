// Crear una función estanJuntos que tome como argumento un array de strings personajes,
// y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino.
// Ejemplo:
const estanJuntos = (personajes) => {
    const personaje1 = "Sam";
    const personaje2 = "Frodo";
    
    for (let i = 0; i < personajes.length; i++) {
        if(((personajes[i] === personaje1) && (personajes[i+1] === personaje2)) || ((personajes[i]) === personaje2 && personajes[i+1] === personaje1))
        { return true;
    }
}return false;
}
console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); //true
console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"])); //false
console.log(estanJuntos(["Sam", "Orco", "Frodo"])); //false