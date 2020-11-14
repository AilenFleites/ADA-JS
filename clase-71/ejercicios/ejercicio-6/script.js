// 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.
const personajes = getInhabitants();

const amigosDe = (name) =>{
    const amigosDe =[];
    for (const personaje of personajes) {
        
        if(personaje.name === name){
            console.log (personaje.name)
         amigosDe.push(personaje.friends);
        }
    }
return  amigosDe;
}

console.table(amigosDe("Fizwood Mysttink"));
console.table(amigosDe("Tobus Quickwhistle"));
