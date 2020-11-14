// Listar a todos los personajes que tengan como profesión "Woodcarver".
const personajes = getInhabitants();
for (const personaje of personajes) {
    if (personaje.professions.includes("Woodcarver")){
     console.log (personaje.name +" "+ personaje.professions);
    }
}
