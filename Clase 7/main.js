// function iterar(arreglo, fun) {
//     for (const iterador of arreglo ) {
//         fun (arreglo);
//     }
// }

// iterar(arreglo,fun);

// el iterador es una variable uxiliar que funciona pàra cada uno de los elementos del array

const productos = [
    { id: 1, nombre: "camisa", precio: 1000, categoria: "hombre" },
    { id: 2, nombre: "zapato", precio: 700, categoria: "mujer" },
    { id: 3, nombre: "gorra", precio: 850, categoria: "hombre" },
    { id: 4, nombre: "media", precio: 320, categoria: "mujer" },
  ];
   
//   let generos = prompt("ingrese las categorias de los prudcots que desea")

//   const filtrados = productos.filter((item) => item.categoria === generos);

// let nombre = prompt(`ingrese el producto que desea buscar`);
// const producto = productos.find((item) => item.nombre === nombre);

if (producto) {
    alert(`
    Nombre: ${producto.nombre}
    Precio: ${producto.precio}
    Categoria: ${producto.categoria}
    `)
} else {
    alert(`No disponible`);
}
 console.log(producto); 

//filter filtra todos los productos que cumplan la condición dada, devuelve un array con los elementos filtrados

 const categoria = prompt("Ingrese el precio mínimo del producto");
const filtrados = productos.filter((item) => item.categoria === categoria);

// forEach recorre cada uno de los elementos de un array
 
filtrados.forEach((item) => {
  alert(`
    Categoria: ${item.categoria}
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: ${item.precio}
  `);
});

//map modifica o transforma cada uno de los elementos del arreglo

const precios = productos.map((item) => item.precio);
console.log(precios);

const nombres = productos.map((item) => item.nombre);
console.log(nombres);

const preciosNavidad = productos.map((item) => {
  return {
    id: item.id,
    nombre: item.nombre,
    precio: item.precio - item.precio * 0.21, // item.precio * 0.79
  };
});

//reduce reduce un arreglo a un único valor

const numeros = [1, 3, 4, 56, 7, 8];
const total = numeros.reduce((acum, item) => acum + item, 0);
console.log(total);

const totalCarrito = productos.reduce((acum, item) => acum + item.precio, 0);
console.log(totalCarrito);