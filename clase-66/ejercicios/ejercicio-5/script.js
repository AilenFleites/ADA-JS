// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es
const esConsonante = (letra) => {
    const vocales = ["a","e","i", "o", "u"];
    if (vocales.includes(letra)){
        return false;
    }else{
        return true;
    }
    }
    
console.log(esConsonante('a')); // false
console.log(esConsonante('n')); // true
console.log(esConsonante('i')); // false
console.log(esConsonante('e')); // false
console.log(esConsonante('r')); // true