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

const carrito = []

// let total = 0;

let noDisponible = true;

function compra () {

    let seleccion = prompt("selecione que producto desea comprar");
    
    const producto = productos.find((item) => item.nombre === seleccion);
    
    
    if (producto) {
        alert (`
        nombre: ${producto.nombre};
        precio: ${producto.precio};
        categoria: ${producto.categoria};
        `);

        let agregar = prompt(`desea comprar el producto? si/no`)
        
        switch (agregar) {
            case "si":
                carrito.push(producto);

                noDisponible = false;

                let otroProducto = prompt("¿desea agregar otro producto? si/no");
                
                agregarOtro();

                function agregarOtro () {

                if (otroProducto === "si") {
                 compra()
                } else if( otroProducto === "no") {
                    alert ("gracias por visitar nuestra pagina.")

                } else {
                   alert ("seleccione una respuesta correcta!") 
                }}
                
        }
        // if (agregar === `si`) {
        //     carrito.push(producto);
        // }
        

    } else {
    alert (`producto no disponible`)
    }
    
}

while (noDisponible === true) {
    compra();
}


const total = carrito.reduce ((acum, item) => acum + item.precio + 0);

// const carritoCompras = () => 



// const totalCarrito = carrito.reduce((acum, item ) => acum + item.precio, 0);
// if (agregar === "si") {
//     compraProdcutos.push(producto)
// }

// console.log(carrito);
console.log(total);