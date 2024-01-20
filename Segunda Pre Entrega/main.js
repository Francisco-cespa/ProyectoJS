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

let noDisponible = true;

// const sumar = (x, y) => x + y;

function compra () {

    let seleccion = prompt("Selecione el producto que desea comprar \n_Lavandina.\n_Jabon.\n_Detergente.\n_Yerba.\n_Agua.\n_Gaseosa.\n_Snaks.\n_Cepillo\n_Carne\n_Alcohol\n_Pasta de diente.\n_Trapo.\n_Shampo.").toLocaleLowerCase();
    
    const producto = productos.find((item) => item.nombre === seleccion);
    
    
    if (producto) {
        alert (`
        Nombre: ${producto.nombre};
        Precio: ${producto.precio};
        Categoria: ${producto.categoria};
        `);

        let agregar = prompt(`desea comprar el producto? Si/No`).toLocaleLowerCase();
        
        switch (agregar) {
            case "si":
                carrito.push(producto);

                noDisponible = false;

                let otroProducto = prompt("¿desea agregar otro producto? Si/No").toLocaleLowerCase();

                if (otroProducto === "si") {
                 compra();
                } else if( otroProducto === "no") {
                    alert ("gracias por visitar nuestra pagina.")
                    
                } else {
                    alert ("seleccione una respuesta correcta!");
                    compra();
                   
                }
                
        }

    } else {
    alert (`producto no disponible`);
    noDisponible = true;
    }
    
}

while (noDisponible === true) {
    compra();
}

console.log(carrito);

const precios = carrito.map((item) => item.precio);
console.log(precios);

const totalCarrito = precios.reduce((acum, item) => acum + item + 0);
console.log(totalCarrito);


const totalProductos = carrito.map((item) => item.nombre) 



const costoEnvio = () => { 
    // if (totalCarrito > 3000) {
    //   return "y El envio es gratis"
    // } else {
    //    return "y El costo del envio es de 2500$"
    // }
    totalCarrito > 3000 ? "y El envio es gratis" : "El costo del envio es de 2500$"
}

alert(`Sus productos: ${totalProductos}, El total de su compra es de ${totalCarrito}$ ${costoEnvio()}`);

const pagoFinal = () => {

    let pago = prompt(`¿como desea realizar el pago? \nDebito.\nTarjeta de credito. `).toLowerCase();
    let resultado = "";

    switch(pago) {
        case ("debito"):
            resultado = `pago realizado, total:${totalCarrito}$`;
            return alert(resultado);
        case(`tarjeta de credito`):
            resultado = `pago realizado, total:${totalCarrito * 1.21}$`;
            return alert(resultado);
        default:
        pagoFinal();
    }
}

pagoFinal();

// function compraRealizada() {
//  switch (pago)

// }


// const carritoCompras = () => 



// const totalCarrito = carrito.reduce((acum, item ) => acum + item.precio, 0);
// if (agregar === "si") {
//     compraProdcutos.push(producto)
// }

// console.log(carrito);
// console.log(totalCarrito);