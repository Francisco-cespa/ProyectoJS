class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  
    vender() {
      this.cantidad -= 1; // this.cantidad = this.cantidad - 1
      if (this.cantidad <= 0){
        "producto sin stock";
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