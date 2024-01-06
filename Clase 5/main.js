class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  
    vender() {
      if (this.cantidad <= 0){
        console.log("producto sin stock");
      } else {
        this.cantidad -= 1; // this.cantidad = this.cantidad - 1
      }
    }
  }
  
  const producto1 = new Producto("camisa", 1000, 5);
  console.log(producto1);
  producto1.vender();
  console.log(producto1);
  producto1.vender();
  console.log(producto1);
  producto1.vender();
  console.log(producto1);
  producto1.vender();
  console.log(producto1);
  producto1.vender();
  console.log(producto1);
  producto1.vender();
  console.log(producto1);

// const persona = {nombre:"juan" , edad:"51", direccion:"av" };

// let clave = prompt("ingrese la clave");

// alert(persona[clave]);

// function Persona(nombre, edad, direccion){
//   this.nombre= nombre;
//   this.edad= edad;
//   this.direccion= direccion;
//   // los objetos tambien pueden tener metodos
//   this.hablar = function(){console.log(`hola soy ${this.nombre}`)};
// }

// const persona1 = new Persona("juan",46, "avenida")
// persona1.hablar()

// en las funcìones constructoras se hizo un cambio de notacion por las clases constructoras

// class Persona{
//   constructor(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }
//   // los metodos se crean fuera del constructor
  
//   hablar(){
//     console.log(`hola soy ${this.nombre}`)
//   }
// }

// const persona1 = new Persona("juan",46, "avenida")
// persona1.hablar()

// class Producto {
//   constructor (nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender(){
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto ("remera", 1000);
// console.log(producto1);
// producto1.vender();
// console.log(producto1)