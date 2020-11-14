const personajes  = getInhabitants();
const porID = (min, max) => {
    const resultado = [];
    for (const personaje of personajes) {
        const {id, name} = personaje
        if (id >= min && id <= max) {
            resultado.push(name);
        }
    }
    return resultado;
}
console.log(porID(0, 10))
