const usuario1 = {
    nombre: "carlitos",
    edad: 34,
  };
  const usuario2 = {
    nombre: "juanita",
    edad: 34,
  };
  const usuario3 = {
    nombre: "pedrito",
    edad: 34,
  };
  const usuario4 = {
    nombre: "pepito",
    edad: 34,
  };
  
  const mostrarUsuarios = (...usuarios) => {
    usuarios.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Nombre: ${item.nombre}</h2>
        <b>Edad: ${item.edad}</b>
      `
      document.body.append(div)
    });
  };
  
  mostrarUsuarios(usuario1, usuario2, usuario3, usuario4);