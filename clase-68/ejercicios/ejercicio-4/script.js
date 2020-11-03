/* Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva 
true si ambos arrays tienen los mismos valores en la misma posición, o false sino.
*/

const sonIguales = (a,b)=>{
    for( let i = 0; i< a.length; i++){
        if (a[i] !== b[i]){
            return false;
        }
    }
    return true;
}
console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])); // true
console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])); // false
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])); // false