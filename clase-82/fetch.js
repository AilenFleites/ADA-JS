// fetch
const btn = document.getElementById("get-data");

btn.addEventListener("click", () => {
  fetch("inhabitants.json").then((data) => {
    console.log(data.json());
  });
});

// REST API
// Endpoints
// Recursos
// Path params
// Métodos HTTP
// GET