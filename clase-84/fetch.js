const base = "https://api.themoviedb.org/3/";
const baseImg = "https://image.tmdb.org/t/p/w500/";
const apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";
let page = 1;

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const pageNumber = document.getElementById("page");

const peliculaSeleccionada = document.createElement('div');


table.setAttribute("border", 1)
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

const getMovies = (page) => {

    pageNumber.innerHTML = page;
    
    tbody.innerHTML = "";
    
    thead.innerHTML = "";
    
    
    fetch(`${base}movie/top_rated?api_key=${apiKey}&page=${page}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const { results } = data;

            const trHead = document.createElement("tr");

            for (prop in results[0]) {
                const th = document.createElement("th");
                th.innerHTML = prop;
                trHead.appendChild(th);
            }
            thead.appendChild(trHead);

            for (const movie of results) {
                const tr = document.createElement("tr");
                for (const prop in movie) {
                    const td = document.createElement("td");
                    if (prop === "backdrop_path" || prop === "poster_path") {
                        const img = document.createElement("img");
                        img.src = baseImg + movie[prop];
                        img.setAttribute("height", 100);
                        td.appendChild(img);
                    } else {
                        td.innerHTML = movie[prop];
                    }
                    tr.appendChild(td);

                }
                tbody.appendChild(tr);
            }

        })
}

getMovies(page);

const btnSiguiente = document.getElementById("btn-siguiente");
const btnAnterior = document.getElementById("btn-anterior");

btnSiguiente.addEventListener("click", () => {
    page++;
    getMovies(page);
});
btnAnterior.addEventListener("click", () => {
    page--;
    getMovies(page);
});


// Crear una función renderTableHead que reciba una tabla y un objeto y en bases a sus prop,
// renderice la cabecera de una tabla en pantalla.

// Crear una función renderImage que renderice una imagen en pantalla.

// Crear una función renderTableData que reciba un row y un objeto y renderice una fila de tabla en pantalla.

// Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre los generos disponibles.

// Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre las peliculas mas populares.

// Paginar donde sea necesario.