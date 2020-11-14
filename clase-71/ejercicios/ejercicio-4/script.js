//ejer 17 - Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" en base a una propiedad y un valor enviados como parámetros.
const lista = (key, value) => {
    const array = [];
    for (const personaje of personajes) {
        if (personaje[key] === value) {
            array.push(personaje.name)
        }
    }
    return array;
}
console.log(lista('age', 240))