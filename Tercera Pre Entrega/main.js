const productos = [
    {nombre:"lavandina", precio: 700, categoria:"limpieza" ,imagen:"./imagenes/Lavandina.png", id:"1"},
    {nombre:"jabon", precio: 300, categoria:"higiene", imagen:"./imagenes/jabon.jpg", id:"2"},
    {nombre:"detergente", precio:400,categoria:"limpieza", imagen:"./imagenes/Detergente.webp", id:"3"}, 
    {nombre:"yerba", precio:800, categoria:"consumo", imagen:"./imagenes/yerba.jpg", id:"4"},
    {nombre:"agua", precio:700, categoria:"consumo", imagen:"./imagenes/agua.jpg", id:"5"},
    {nombre:"gaseosa", precio:900, categoria:"consumo", imagen:"./imagenes/gaseosa.webp", id:"6"},
    {nombre:"snacks", precio:1000, categoria:"consumo", imagen:"./imagenes/snacks.webp", id:"7"},
    {nombre:"cepillo", precio:1200, categoria:"limpieza", imagen:"./imagenes/cepillo.webp", id:"8"},
    {nombre:"carne", precio:1700, categoria:"consumo", imagen:"./imagenes/carne.jpg", id:"9"},
    {nombre:"alcohol", precio:700, categoria:"higiene", imagen:"./imagenes/alcohol.webp", id:"10"},
    {nombre:"pasta de dientes", precio:600, categoria:"higiene", imagen:"./imagenes/pasta de dientes.jpg", id:"11"},
    {nombre:"trapo", precio:200, categoria:"limpieza", imagen:"./imagenes/trapo.jpg", id:"13"},
    {nombre:"shampoo", precio:1100, categoria:"higiene", imagen:"./imagenes/shampoo.png", id:"14"},
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const divProductos = document.getElementById("divProductos");


const mostrarProductos = () => {

productos.forEach((productos) => {
    
    const {nombre, precio, categoria, imagen, id} = productos
    
    let card = document.createElement("div");
    
    card.className = "tarjetas"
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${imagen}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p> categoria: ${categoria} </p>
    <p class="card-text">$${precio} </p>
    <button id="${id}" class="btn btn-secondary comprar">Agregar a carrito</button>
    </div>
    </div>
    `
    divProductos.appendChild(card)

});

}

mostrarProductos();

const agregarAlCarrito = e => {
    if (e.target.classList.contains('comprar')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        mostrarCarrito();
        guardarCarrito();
    }
}

const botonComprar = document.addEventListener("click", agregarAlCarrito);

const precioTotal = document.getElementById("precioTotal");

const mostrarCarrito = () => {
    const divCarrito = document.getElementById("divCarrito"); //preguntar si esta bien que sea una variable
    divCarrito.innerHTML = "<h2> Carrito: </h2>";
    carrito.forEach((productos) => {
        divCarrito.innerHTML += `
        <p>${productos.nombre} $${productos.precio}</p>
        `
    });
    // console.log(carrito.reduce((acum, item) => acum + item.precio,
    // 0,
    // ));
    // console.log(carrito);

    
    precioTotal.innerText = "total carrito = $ " + carrito.reduce((acum, item) => acum + item.precio,
    0,);
    
}

const vaciarCarrito = document.getElementById("vaciarCarrito");

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}



function limpiarCarrito() {
    carrito = [];
    precioTotal.innerText = "total carrito = $ " + carrito.reduce((acum, item) => acum + item.precio,
    0,);
    const divCarrito = document.getElementById("divCarrito");
    divCarrito.innerHTML = " "
    guardarCarrito();
    Swal.fire({
            //     title: "desea vaciar su carrito?",
            //     text: "no va a poder revertir esto.",
            //     icon: "warning",
            //     showCancelButton: true,
            //     confirmButtonColor: "#3085d6",
            //     cancelButtonColor: "#d33",
            //     confirmButtonText: "vaciar carrito"
            //   }).then((result) => {
            //     if (result.isConfirmed) {
            //       Swal.fire({
                    title: "vaciado.",
                    text: "su carrito esta vacio!.",
                    icon: "success"
                  });
                }
            //   });
    
    // mostrarCarrito();
// }

const vaciar = vaciarCarrito.addEventListener("click", limpiarCarrito)




// const alert = vaciarCarrito.addEventListener("click", () => {
//     Swal.fire({
//         title: "desea vaciar su carrito?",
//         text: "no va a poder revertir esto.",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "vaciar carrito"
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: "vaciado.",
//             text: "su carrito esta vacio!.",
//             icon: "success"
//           });
//         }
//       });

// })




// const botonEliminar = botonEliminar.addEventListener('click', function() {
//          eliminarDelCarrito(index);
//          mostrarCarrito();
//     });

    // elemento.appendChild(botonEliminar);
    // carritoElemento.appendChild(elemento);





// const resetCarrito = () => {
//     carrito = [];
//     mostrarCarrito()
// }

// const vaciarCarrito = document.getElementById("vaciarCarrito");
// vaciarCarrito.addEventListener("click", () => resetCarrito )



mostrarCarrito();

