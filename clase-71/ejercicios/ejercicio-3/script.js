// ejer 16 - Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.
const porColorDePelo = (color) => {
    const colorPelo = [];
    for (const personaje of personajes) {
        if (personaje.hair_color === color) {
            colorPelo.push({
                nombre: personaje.name,
                color: personaje.hair_color
            })
        }
    }
    return colorPelo;
}
//console.log(porColorDePelo('Pink'))