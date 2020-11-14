// Crear una funcián que a partir de un string, devuelva todos los habitantes que contienen dicho string en su nombre.
const personajes = getInhabitants();

const contieneString = (str) =>{
    const nombresQueContienen =[];
    for (const personaje of personajes) {
        if(personaje.name.includes(str)){
         nombresQueContienen.push(personaje.name);
        }
    }
return  nombresQueContienen;
}

console.log(contieneString("Tobus"));
console.log(contieneString("Gyrosl"));
//console.log(filtrarPorProfesion("Tax inspector"));