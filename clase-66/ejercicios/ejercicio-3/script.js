// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo
// y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, 
//debe devolver un string que diga: Error: color de semáforo inválido

const puedeAvanzar = (colorSemaforo) => {

    switch(colorSemaforo) {
        case 'verde' : return true;
        case 'rojo' : return false;
        case 'amarillo' : return false;
        default : return 'Error: color de semáfono invalido';
    }
}
console.log(puedeAvanzar('verde'));     // true
console.log(puedeAvanzar('amarillo'));  // false
console.log(puedeAvanzar('rojo'));      // false
console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'