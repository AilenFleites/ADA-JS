// Crear una función esVocal que tome como argumento un string letra y devuelva true 
//si letra es una vocal o false si no lo es.

const esVocal = (letra) => {
const vocales = ["a","e","i", "o", "u"];
if (vocales.includes(letra)){
    return true;
}else{
    return false;
}
}
console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true