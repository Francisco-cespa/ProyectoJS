// const nombres = ["francisco", "romina", "nicolas", "guido", "maria", "lautaro"];

// const premios = ["televisor", "computadora", "parlantes"];




// const nombreRandom = () => {
//     let nombreGanador = Math.floor(Math.random() * nombres.length)
//     return nombres[nombreGanador];
// }

// const premioRandom = () => {
//     let premioGanado = Math.floor(Math.random() * premios.length)

//   return premios[premioGanado];
// }

// console.log(
//   `Nombre del ganador ${nombreRandom()} Premio ${premioRandom()}`
// );

// console.log(nombreRandom());



//Mínimo y máximo
// console.log(Math.max(2, 23, 4, 5, 67, 78976, 54, 3));
// console.log(Math.min(2, 23, 4, 5, 67, 78976, 54, 3));

// console.log(Math.max(2, 3, 5, 46789, 2, 45, Infinity));
// console.log(Math.min(2, 3, 5, 46789, 2, 45, -Infinity));

//redondear
// console.log(Math.ceil(2.3)); //redondear al entero más cercano hacia arriba
// console.log(Math.ceil(2.7));

// console.log(Math.floor(3.7)); //redondear al entero más cercano hacia abajo
// console.log(Math.floor(3.2));

// Numeros aleatorios, genera un numero entre 0 y 1
// console.log(Math.random());

// 0 - 10
// console.log(Math.round(Math.random() * 10));

// 3 - 20
// console.log(Math.round(Math.random() * amplitud + desplazamiento)); 

// console.log( Math.round(Math.random() * 17 + 3));

//DATE
// console.log(Date());
let navidad = new Date(2023, 11, 24, 23, 59, 59);
console.log(navidad);

// distintos tipos de clase para representar date

// let navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);
// console.log(navidad.toDateString());

console.log(Date.toLocaleString());

// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());

console.log(navidad.getDay());