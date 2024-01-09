// let boton = document.getElementById("boton");

// const saludar = (nombre) => {
//     console.log(`hola click ${nombre}`);
// }

// let nombre = prompt(`ingrese el nombre de la persona`);
// boton.addEventListener("click", () => saludar(nombre));


const arreglo = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
e.preventDefault();
})

// la cantidad de inputs depende de la cantidad 

let inputs = e.target.children;
console.log(inputs[0].value);
console.log(inputs[1].vale);

if (!inputs[0].value.includes("@")) {
    inputs[0].value = "";
    alert ("debe contener @");
}

if (inputs[0].value != "" && inputs[1].value != "") {
    arreglo.push ({nombre: inputs[0].value , edad: inputs[1].value });
    console.log(arreglo);
}