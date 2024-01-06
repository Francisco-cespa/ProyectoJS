// let nombre = prompt("agrega nombre de tu producto");
// let precio = prompt("agrega precio"),

// let productos = [];

// class Productos  {
//     constructor (marca, tipoZapatillas){
//         this.id = productos.length+1
//         this.marca = marca;
//         this.tipoZapatillas= tipoZapatillas;
//     }
// }


// for (let i =0; i < 10; i++) {
// let marca = prompt("ingrese la marca de la zapatilla");
// let tipoZapatillas= prompt("ingrese el tipo de la zapatilla");

// let productos = new productos(marca, tipoZapatillas);
// productos.push(productos)
// }

// console.log(productos);


const productos = ["carne", "arroz", "leche"];

//  para recorrer un array se utiliza for

for (let i = 0; i < productos.length ; i ++ ){
    console.log(`busco el producto ${productos[i]} y lo agrego al carrito`)
}
