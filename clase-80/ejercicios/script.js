// 9- En un documento html agregar al menos tres imágenes de distintos animales,
// una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por 
//un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen
// del animal elegido.

const img = document.createElement("img");
const animals = [
    { name : "gato",
      url : "../kitty.jpg"
    },
    { name : "perro",
      url : "../perro.jpg"
    },
    { name : "tortuga",
    url : "../tortuga.jpg"
  }
];
const imagenAnimal = ()=>{
   const animalPedido = prompt("Elija uno de los siguientes animales: gato / perro / tortuga")
    for (const animal of animals) {
    if(animal.name === animalPedido){
    img.setAttribute("src", animal.url)
    }
    document.body.appendChild(img);
}
}
//imagenAnimal();

//10-Crear un documento html con un título que diga Mis canciones favoritas y una lista
// desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas 
//canciones como ítems de la lista desordenada


const listaDesordenada = () =>{
    const h3 = document.createElement("h3");
    document.body.appendChild(h3);
    h3.innerHTML = ("mis canciones favoritas")
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (let i = 1; i<6; i++){
        const cancion = prompt(`Ingrese su canción favorita n° ${i} :`);
        const li = document.createElement("li");
        li.innerHTML = cancion;
        ul.appendChild(li);
    }
}
//listaDesordenada();

//11- Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles 
//respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que 
//lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe 
//ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar
// en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con
//la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.
const respuestas = [
    {type: "button", response: "Negro"},
    {type: "button", response: "Blanco"},
    {type: "button", response: "Marrón"},
]
const adivinanza = () =>{
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    document.body.appendChild(h3);
    document.body.appendChild(p);
    h3.innerHTML = ("Elija la opción correcta:")
    p.innerHTML = ("¿De qué color era el caballo blanco de San Martín?")
    for (const respuesta of respuestas) {
        const boton = document.createElement(respuesta.type);
        document.body.appendChild(boton);
        boton.innerHTML= respuesta.response;
        boton.addEventListener("click", () => {
            if (respuesta.response === "Blanco"){
                boton.style.backgroundColor = "green";
            }
                else{
                    boton.style.backgroundColor = "red";
                }
          });
    }


}
//adivinanza();

//11 - Crear un documento html que muestre un número (empezando en 0) y 6 botones con los 
//siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón,
// se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

const sumaBotones = () =>{
let sumaTotal = 0;
const botones = [
    { text : "-1", valor: -1},
    { text : "+1", valor: 1},
    { text : "-5", valor: -5},
    { text : "+5", valor: 5},
    { text : "-10", valor: -10},
    { text : "+10", valor: 10},
];
const text = document.createElement("h3");
document.body.appendChild(text);
for (const boton of botones) {
    const btn = document.createElement("button");
    btn.innerHTML = (boton.text);
    document.body.appendChild(btn);
    btn.addEventListener("click",()=>{
    sumaTotal = sumaTotal + boton.valor;
    text.innerHTML = ("calculo = " + sumaTotal);
    })
}

}
sumaBotones();

