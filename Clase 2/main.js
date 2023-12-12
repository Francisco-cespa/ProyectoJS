/* let numero = Number(prompt("ingrese un numero"))

if (numero < 1000){
    alert("su numero es menor al minimo");
}else {
    alert("su numero es correcto.")
}
 */


/* let numero = Number(prompt("ingrese un numero"))

if (numero >= 10 && numero <=50 ){
    alert("tu numero esta dentro del rango");
}else if(numero < 10){
    alert("tu numero es menor al rango permitido");
}else {
    alert ("tu numero supera el rango permitido");
} */

let producto = prompt("que vas a comer hoy?").toLowerCase();
 
if(producto === "pizza" || producto === "empanadas"){
    alert("el precio de tu pedido es de 500"); 
} else if(producto === "sandwich"){
    alert("700");
} else if(producto === "papas fritas"){
    alert("100");
} else {
    alert("no tenemos ese producto");
}

console.log (producto);