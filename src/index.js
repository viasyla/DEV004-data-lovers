let counter = 1;


// setInterval =llama a una función o ejecuta un fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada llamada.
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 6) { //6 es la cant de imagenes en carrusel
    counter = 1;
  }
}, 2000); //2000 son los milisegundos que retarda en cambiar las imagenes en el carrusel