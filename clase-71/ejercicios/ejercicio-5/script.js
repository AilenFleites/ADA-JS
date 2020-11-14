// 5 Crear una función que devuelva al más alto, al más bajo, al más anciano,
// al más joven o al más ancho de "Brastlewark".

const personajes = getInhabitants();

const retornarElMas = (prop) =>{
    let elMas = personajes[0];   
for (personaje of personajes) {
    if (personaje[prop] > elMas[prop]){
        elMas = personaje;
    }
}
return elMas;
}


console.log(retornarElMas("height"));
console.log(retornarElMas("age"));
console.log(retornarElMas("weight"));

