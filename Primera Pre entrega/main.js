let producto = prompt("¿Que desea comprar?\n_Televisor\n_Lavarropas\n_Microondas\n_Cocina\n_Tostadora").toLowerCase()

console.log(producto);


function precioCuotas () {
    if(producto === "televisor" ) { 
        /* precio === Number(20000); */
        let resultado = Number((20000 * .60) / 6);
        return resultado;
    } else if ( producto === "lavarropas") {
        let resultado = Number((80000 * .60) / 6);
        return resultado;
    } else if(producto === "microondas"){
        let resultado = Number((45000 * .60) / 6);
        return resultado;
    } else if (producto === "cocina") {
        let resultado = Number((60000 * .60) / 6);
        return resultado;
    } else if(producto === "tostadora") {
        let resultado = Number((25000 * .60) / 6);
        return resultado;
    } else {
        alert ("no contamos con ese producto, disculpe");
        producto = prompt("¿Que desea comprar?\n_Televisor\n_Lavarropas\n_Microondas\n_Cocina\n_Tostadora").toLowerCase()
    }
}

console.log(precioCuotas());

/* function precioContado (precio) {
    let resultado = Number(precio);
    return resultado;
}
 */

/* let resultadoContado = precioContado() */

let resultadoCuotas = precioCuotas(); 

let valorTelevisorCuotas = Number((20000 + (20000 * .60)) / 6);
let valorLavarropasCuotas = Number((80000 + (80000 * .60)) / 6);
let valorMicroondasCuotas = Number((45000 + (45000 * .60)) / 6);
let valorCocinaCuotas = Number((60000 + (60000 * .60)) / 6);
let valorTostadoraCuotas = Number((25000 + (25000 * .60)) / 6);

while (producto != !Number.isNaN) {
    switch (producto) {
        case "televisor":
            alert(`su producto tiene un valor de 20000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorTelevisorCuotas)}$ por mes`);
        break;            
        case "lavarropas":
            alert(`su producto tiene un valor de 80000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorLavarropasCuotas)}$ por mes`);
        break;
        case "microondas":
            alert(`su producto tiene un valor de 45000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorMicroondasCuotas)}$ por mes`);
        break;
        case "cocina":
            alert(`su producto tiene un valor de 60000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorCocinaCuotas)}$ por mes`);

        break;    
        case "tostadora":
            alert(`su producto tiene un valor de 25000$ en un pago\n O un recargo por cuota de ${resultadoCuotas}$, financiado en 6 cuotas.`);
            alert(`la cuota de su prodcuto tiene un valor de ${parseInt(valorTostadoraCuotas)}$ por mes`);

        break; } 
    break;
}