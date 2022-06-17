// modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// funcion principal
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // instanciamos la conexion
    const xhr = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhr.open('GET', url_api, true);
    // validacion del llamado
    xhr.onreadystatechange = () => {
      // comparamos el 4 porque eso indica que se completo la peticion
      //  y verificamos que el status este en 200, 200 es que es correcto
      if (xhr.readyState === 4) {
        xhr.status === 200
          ? resolve(JSON.parse(xhr.responseText))
          : reject(new Error('Error ' + url_api));
      }
    };
    // por ultimo enviamos la peticion
    xhr.send();
  });
};

// exportamos la funcion
module.exports = fetchData;
