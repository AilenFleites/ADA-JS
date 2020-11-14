// Listar a todos los personajes que tengan como profesion un dato enviado como parámetro.
const personajes = getInhabitants();
const filtrarPorProfesion = (profesion) =>{
    const personajesSegunProfesion =[];
    for (const personaje of personajes) {
        if(personaje.professions.includes(profesion)){
         personajesSegunProfesion.push(personaje.name);
        }
    }
return  personajesSegunProfesion;
}

console.log(filtrarPorProfesion("Cook"));
console.log(filtrarPorProfesion("Tax inspector"));
