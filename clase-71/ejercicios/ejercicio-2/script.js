// ejer 15 - Crear una funcion que devuelva los personaes por ID en base a un rango numerico.
const porID = (min, max) => {
    const resultado = [];
    for (const personaje of personajes) {
        if (personaje.id >= min && personaje.id <= max) {
            resultado.push(personaje.name);
        }
    }
    return resultado;
}
//console.log(porID(0, 10))