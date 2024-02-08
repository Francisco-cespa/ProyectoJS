
const productosBase = []

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const divProductos = document.getElementById("divProductos");


const traerProductos = async () => {
    try {
        const response = await fetch("./data.json");
        const productos = await response.json();
             
        productos.forEach(item => {
            productosBase.push(item)   
        })
    } catch (error) {
        console.error("error de acceso a base de datos", error);
    }

};

traerProductos();

console.log(productosBase);

const mostrarProductos = () => {
    
    productosBase.forEach((producto) => {

        const {nombre, precio, categoria, imagen, id} = producto
        
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
        const producto = productosBase.find(producto => producto.id == id);
        carrito.push(producto);
        mostrarCarrito();
        guardarCarrito();
    }
}

const botonComprar = document.addEventListener("click", agregarAlCarrito);

const precioTotal = document.getElementById("precioTotal");

const mostrarCarrito = () => {
    const divCarrito = document.getElementById("divCarrito");
    divCarrito.innerHTML = "<h2> Carrito: </h2>";
    carrito.forEach((productos) => {
        divCarrito.innerHTML += `
        <p>${productos.nombre} $${productos.precio}</p>
        `
    });

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
            
        title: "vaciado.",
        text: "su carrito esta vacio!.",
        icon: "success"
    });
}
    
const vaciar = vaciarCarrito.addEventListener("click", limpiarCarrito)

mostrarCarrito();
