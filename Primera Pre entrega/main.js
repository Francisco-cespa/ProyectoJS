

// console.log(producto);


// function precioCuotas () {
//     let producto = prompt("¿Que desea comprar?\n_Televisor\n_Lavarropas\n_Microondas\n_Cocina\n_Tostadora").toLowerCase();
//     let resultado;

//     while (true){ 
//         if(producto === "televisor" ) { 
//             resultado = Number((20000 * .60) / 6);
//             break;
//             /* return resultado; */
//         } else if ( producto === "lavarropas") {
//             resultado = Number((80000 * .60) / 6);
//             break;
//             /* return resultado; */
//         } else if(producto === "microondas"){
//             resultado = Number((45000 * .60) / 6);
//             break;
//             /* return resultado; */
//         } else if (producto === "cocina") {
//             resultado = Number((60000 * .60) / 6);
//             break;
//             /* return resultado; */
//         } else if(producto === "tostadora") {
//             resultado = Number((25000 * .60) / 6);
//             break;
//             /* return resultado; */
//         } else {
//             alert ("no contamos con ese producto, disculpe");
//             producto = prompt("¿Que desea comprar?\n_Televisor\n_Lavarropas\n_Microondas\n_Cocina\n_Tostadora").toLowerCase();
//         }
//     }
//     return resultado;

// }
    
// console.log(precioCuotas());

// function precioContado (precio) {
//     let resultado = Number(precio);
//     return resultado;
// }
//  let resultadoContado = precioContado() 
// let resultadoCuotas = precioCuotas(); 

// let valorTelevisorCuotas = Number((20000 + (20000 * .60)) / 6);
// let valorLavarropasCuotas = Number((80000 + (80000 * .60)) / 6);
// let valorMicroondasCuotas = Number((45000 + (45000 * .60)) / 6);
// let valorCocinaCuotas = Number((60000 + (60000 * .60)) / 6);
// let valorTostadoraCuotas = Number((25000 + (25000 * .60)) / 6);

// while (producto != !Number.isNaN) {
//     switch (producto) {
//         case "televisor":
//             alert(`su producto tiene un valor de 20000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
//             alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorTelevisorCuotas)}$ por mes`);
//         break;            
//         case "lavarropas":
//             alert(`su producto tiene un valor de 80000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
//             alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorLavarropasCuotas)}$ por mes`);
//         break;
//         case "microondas":
//             alert(`su producto tiene un valor de 45000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
//             alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorMicroondasCuotas)}$ por mes`);
//         break;
//         case "cocina":
//             alert(`su producto tiene un valor de 60000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
//             alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorCocinaCuotas)}$ por mes`);

//         break;    
//         case "tostadora":
//             alert(`su producto tiene un valor de 25000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
//             alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorTostadoraCuotas)}$ por mes`);

//         break; } 
//     break;
// }


let valorTelevisor = 20000;
let valorLavarropas = 80000;
let valorMicroondas = 45000;
let valorCocina = 60000;
let valorTostadora = 25000;
let coeficienteCuota = 1.2;
let esCorrecto = false;

function precioCuotas () {
    let producto = prompt("Que desea comprar? \nTelevisor\nLavarropas\nMicroondas\nCocina\nTostadora").toLowerCase();

    switch (producto) {
        case "televisor":
            resultado = `${producto} tiene un valor de $${valorTelevisor} en un pago.\nSi desea pagarlo en 6 cuotas, serian 6 cuotas de $${((valorTelevisor * coeficienteCuota) / 6)} (valor final $${(valorTelevisor * coeficienteCuota)})`;
            esCorrecto = true;
            return alert(resultado);
        
        case "lavarropas":
            resultado = `${producto} tiene un valor de $${valorLavarropas} en un pago.\nSi desea pagarlo en 6 cuotas, serian 6 cuotas de $${((valorLavarropas * coeficienteCuota) / 6)} (valor final $${(valorLavarropas * coeficienteCuota)})`;
            esCorrecto = true;
            return alert(resultado);
        
        case "cocina":
            resultado = `${producto} tiene un valor de $${valorCocina} en un pago.\nSi desea pagarlo en 6 cuotas, serian 6 cuotas de $${((valorCocina * coeficienteCuota) / 6)} (valor final $${(valorCocina * coeficienteCuota)})`;
            esCorrecto = true;
            return alert(resultado);

        case "tostadora":
            resultado = `${producto} tiene un valor de $${valorTostadora} en un pago.\nSi desea pagarlo en 6 cuotas, serian 6 cuotas de $${((valorTostadora * coeficienteCuota) / 6)} (valor final $${(valorTostadora * coeficienteCuota)})`;
            esCorrecto = true;
            return alert(resultado);

        case "microondas":
            resultado = `${producto} tiene un valor de $${valorMicroondas} en un pago.\nSi desea pagarlo en 6 cuotas, serian 6 cuotas de $${((valorMicroondas * coeficienteCuota) / 6)} (valor final $${(valorMicroondas * coeficienteCuota)})`;
            esCorrecto = true;
            return alert(resultado);
        

        
        default:
            resultado = `Ingrese un producto existente!`;
            return alert(resultado);
    }
}

while (esCorrecto != true) {
    precioCuotas();
}