// Crear una función separar que tome como argumento un string con emojis de perros y
// gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

const separar = (perrosYgatos) =>{
    let gatos="";
    let perros = "";
for ( let i= 1; i < perrosYgatos.length; i++){
    let animal = perrosYgatos[0];
 if (perrosYgatos[i] === animal) {
     perros = perros + perrosYgatos[i];
 } else{
     gatos = gatos + perrosYgatos[i];
 }
}
return perros+gatos;
}

console.log(separar("XXXYYXYYX"));