/**
 * Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre,
 *  y una vez ingresado muestre un saludo con el nombre dentro de un h1. 
 * El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que 
 * viene por defecto.
 */

const saludo = () => {
    let name = prompt('¿Cuál es tu nombre?');
    document.querySelector('.saludo').innerHTML += `Hola, ${name}`;
}

// saludo();
/**
 * Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema 
 * hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.
 */

const pedirColor = () => {
    let color = prompt('¿Qué color quisiera ver el fondo de esta página? Por ejemplo, en este momento el color usado es #3cb371');
    const background = document.querySelector('.fondo');
    background.style.backgroundColor = color;
}

//pedirColor();

/* Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores
 correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del 
 body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.*/

 const pedirColorRgb = ()=>{
 const coloresRgb = 3;
 let colors = [];
 for (let i = 0; i< coloresRgb; i++){
    colors[i] = Number(prompt("Ingrese un número comprendido entre 0 y 255",));
 }
 document.body.style =  `background-color: rgb(${colors[0]},${colors[1]},${colors[2]})`
 }
// pedirColorRgb();

/* Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen 
(siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida 
modifique el tamaño de una imagen (cualquiera) en el documento html. 
Por ejemplo:

Opción elegida	Ancho de imagen
 chica =>	200px
 mediana =>	500px
 grande =>	800px*/

 const pedirAnchoImagen = () =>{
     let anchoImagen = "";
     const img = document.createElement("img")
     
     img.setAttribute("src","../../kitty.jpg")
     anchoImagen = prompt("Elija el tamaño de imagen (chica, mediana o grande): ", "")
     switch (anchoImagen) {
         case "chica":
             img.style.width = "200px"
             break;
        case "mediana":
            img.style.width ="500px"
            break;
        case "grande":
        img.style.width ="800px";
        default:
            "Error"
             break;
     }
    document.body.appendChild(img);
 }
 //pedirAnchoImagen();

 /*Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura,
y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, 
Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada,
siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo*/

const pedirTemperatura = ()=>{
    let h1 = document.createElement("h1")
    let temperatura = prompt("Ingrese la temperatura: ",)
    h1.textContent ="la temperatura actual es : " + temperatura;
    if(temperatura < 0){
        h1.style.color = "blue";
    }
    if(temperatura >= 0 && temperatura < 15){
        h1.style.color = "lightblue";
    }
    if(temperatura >= 15 && temperatura< 25){
        h1.style.color = "green";
    }
    if(temperatura >= 25 && temperatura < 30){
        h1.style.color = "yellow";
    }
    if(temperatura>= 30 && temperatura < 35){
        h1.style.color = "orange";
    }
    if(temperatura > 35) {
        h1.style.color = "red";
    }
    document.body.appendChild(h1)
}
//pedirTemperatura();

/* Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse 
pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de 
progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la 
barra contenedora)*/

const progreso = () =>{
    let porcentaje = prompt("Ingrese un porcentaje de progreso" );
    const contenedor = document.createElement("div");
    const barra = document.createElement("div");
    barra.style.backgroundColor = "green";
    contenedor.style.backgroundColor = "grey"
    contenedor.style.height = "50px"
    contenedor.style.width = "100%"
    barra.style.width = `${porcentaje}%`; 
    barra.style.height = "50px";
    document.body.appendChild(contenedor);
    contenedor.appendChild(barra);
}
//progreso();

/*En un documento html hacer un post de una red social que contenga:
// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra)
 más un número con la cantidad. Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave
 y un border radius. Hacer un programa que al iniciarse pregunte mediante tres prompts 
 por la cantidad de cada una de las reacciones y actualice los valores de los spans 
 correspondientes*/

 const redSocial = () =>{
     
     const user = prompt("Ingrese su nombre de usuario:");
     const cantidadLikes = prompt("ingrese la cantidad de likes");
     const cantidadMeEncanta = prompt("ingrese la cantidad de Me Encanta");
     const cantidadMeAsombra = prompt("ingrese la cantidad de Me Asombra");
     
     
     const h3 = document.createElement("h3");
     const p = document.createElement("p");
     const div = document.createElement("div");
     const meGusta = document.createElement("span");
     const meEncanta = document.createElement("span");
     const meAsombra = document.createElement("span");

    const bienvenida = document.createTextNode(`Bienvenid@ ${user}`);
    const texto = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident sed totam earum! Asperiores magni, ipsum porro dolore pariatur corrupti itaque deserunt, temporibus laudantium repudiandae iste. Eum aspernatur cum natus");
    const textoLikes= document.createTextNode(`Me gusta ${cantidadLikes}`);
    const textoMeEncanta = document.createTextNode(`Me encanta ${cantidadMeEncanta}`);
    const textoMeAsombra = document.createTextNode(`Me Asombra ${cantidadMeAsombra}`);

    document.body.appendChild(h3);
    h3.appendChild(bienvenida);
    document.body.appendChild(p);
    p.appendChild(texto);
    document.body.appendChild(div);

    div.appendChild(meGusta);
    
    div.appendChild(meEncanta);
    
    div.appendChild(meAsombra);
  

    document.body.style.fontFamily = "Verdana";
    div.style.display = "flex";

    meGusta.style.flexFlow ="column";
    meGusta.style.margin = "auto"
    meGusta.style.backgroundColor = "grey";
    meGusta.style.borderRadius = "2px";
    meGusta.innerHTML=('<i class="fas fa-thumbs-up"></i>');
    meGusta.appendChild(textoLikes);

    meEncanta.style.flexFlow ="column";
    meEncanta.style.margin = "auto"
    meEncanta.style.backgroundColor = "grey";
    meEncanta.style.borderRadius = "2px";
    meEncanta.innerHTML= ('<i class="fas fa-grin-hearts"></i>');
    meEncanta.appendChild(textoMeEncanta);

    meAsombra.style.flexFlow= "column";
    meAsombra.style.margin = "auto"
    meAsombra.style.backgroundColor = "grey";
    meAsombra.style.borderRadius = "2px";
    meAsombra.innerHTML= ('<i class="fas fa-surprise"></i>');
    meAsombra.appendChild(textoMeAsombra);
  
 }
 
//redSocial();

/* Hacer un programa que al iniciarse pregunte mediante prompts por
// - un título
// - una url de una imagen
// - una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga
// - una imagen, con la url de la imagen ingresada
// - un título, con el texto del título ingresado
// - un link que diga Leer más, con la url al artículo ingresado

// Dar algunos estilos mínimos a la card:
 - centrarla con respecto a la pantalla
 - agregarle un borde
 - agregarle un sombreado
 - cambiarle la tipografía
 - cambiarle los tamaños de fuente
 - cambiarle los colores por defecto*/
 const titulo = document.getElementById("titulo");
 const divCard = document.getElementById("card");
 const img = document.getElementById("imagen");
 const articulo = document.getElementById("articulo");
 const link = document.getElementById("a");
 const card = () =>{
     const textoTitulo = prompt("Ingrese un titulo");
     const urlImagen = prompt("Ingrese la url de la imagen");
     const urlArticulo = prompt("Ingrese la url del articulo");
 
     titulo.innerHTML= (textoTitulo);
     img.setAttribute("src",urlImagen);
     link.setAttribute("href", urlArticulo);
 }
 card();
 //https://www.google.com/search?q=gato&tbm=isch&ved=2ahUKEwjrwcfuh6ntAhWXBbkGHZj7AKQQ2-cCegQIABAA&oq=gato&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzoECCMQJzoFCAAQsQNQkwZYtg9gmBZoAHAAeACAAa8BiAHDBJIBAzAuNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bEPEX-vbLJeL5OUPmPeDoAo&bih=657&biw=1360#imgrc=NJQpkICt5-F7SM
 //https://www.dinero.com/internacional/articulo/los-gatos-trasmiten-el-coronavirus/300616