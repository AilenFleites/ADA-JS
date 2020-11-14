// Crear una función que devuelva un objeto con una propiedad con todas las profesiones que 
//se desarrollan en "Brastlewark" y otra con la cantidad de profesiones encontradas.

const personajes = getInhabitants();

const profesiones = () =>{
    let allProfesiones = [];
    let resultado ={};
    let cantidadProfesiones = 0;
    for (const personaje of personajes) {
        for (const profesion of personaje.professions) {
            if (!allProfesiones.includes(profesion)){
                allProfesiones.push(profesion)
                cantidadProfesiones++;
            }    
        }
    }
return  resultado = {
    profesiones : allProfesiones,
    cantidad : cantidadProfesiones,
}
}
console.log(profesiones())