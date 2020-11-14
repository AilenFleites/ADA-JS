// ejer 14 - Mostrar en pantalla al/los personajes mas enanos de "Brastlewark".
const personajes = getInhabitants();
let min = personajes[0].height;
for (const personaje of personajes) {
    if (personaje.height < min) {
        min = personaje.height
    }
}
//console.log(min);
