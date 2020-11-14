// Crear una función sumarImparesHasta que tome como argumento un número numero y 
//que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

const sumarImparesHasta = (numero)=>{
let i = 1;
let suma = 0;
while (i <= numero){
suma = suma + i;
i = i + 2;
} return suma;;
}
console.log(sumarImparesHasta(5)); // 9 (1 + 3 + 5 = 9)
console.log(sumarImparesHasta(13)); // 49
console.log(sumarImparesHasta(47)); // 576