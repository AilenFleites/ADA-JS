// Crear una funcion que devuelva el habitante con mayor volumen de "Brastlewark". 
//Calculamos el volumen multiplicando el alto por el ancho.

let personajes = getInhabitants();
const calcularVolumen =()=>{
    for ( personaje of personajes) {
        let volumen = (personaje.weight * personaje.height);
        personaje.volumen = volumen;
        }
    return personajes;
}


const elMayorVolumen = () =>{
    let nuevoArray = calcularVolumen();
    let mayorVolumen = nuevoArray[0];
    let arrayOrdenado = nuevoArray.sort((a,b) => b.volumen - a.volumen)
    return arrayOrdenado[0];
    /*for (let personaje of nuevoArray){
        if (personaje.volumen > mayorVolumen.volumen) {
        mayorVolumen = personaje;
        console.log(mayorVolumen);
       }
    }
    return mayorVolumen; */
}

console.table(personajes[0])
console.log(elMayorVolumen());