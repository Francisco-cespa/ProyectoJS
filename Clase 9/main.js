// let seccion = prompt("Ingrese la seccion");
// let saludo = document.getElementById("saludo");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenid@ al carrito</h1>";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenid@ a los favoritos</h1>";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = "<h1>Bienvenid@ a nuestra super página</h1>";
//   saludo.className = "verde";
// }

const productos = [
    {nombre:"lavandina", precio: 700, categoria:"limpieza"},
    {nombre:"jabon", precio: 300, categoria:"higiene"},
    {nombre:"detergente", precio:400,categoria:"limpieza"}, 
    {nombre:"yerba", precio:800, categoria:"consumo"},
    {nombre:"agua", precio:700, categoria:"consumo"},
    {nombre:"gaseosa", precio:900, categoria:"consumo"},
    {nombre:"snacks", precio:1000, categoria:"consumo"},
    {nombre:"cepillo", precio:1200, categoria:"limpieza"},
    {nombre:"carne", precio:1700, categoria:"consumo"},
    {nombre:"alcohol", precio:700, categoria:"higiene"},
    {nombre:"pasta de dientes", precio:600, categoria:"higiene"},
    {nombre:"trapo", precio:200, categoria:"limpieza"},
    {nombre:"shampo", precio:1100, categoria:"higiene"},
];

let contenedor = document.getElementById("contenedor");

productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML =`
    <p> nombre: ${item.nombre} </p>
    <p> precio:  ${item.precio} </p>
    <p> categoria: ${item.categoria} </p>
    `
    contenedor.append(div);
});