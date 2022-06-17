const elements = ['hola', 'soy', 'un', 'array', 'de', 'elementos'];

let string = '';
let separador = '-';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  if (index === elements.length - 1) {
    string = string + element;
  } else {
    string = string + element + separador;
  }
}
console.log(string);
//usando el metodo join
const rta = elements.join('-');
console.log(rta);

const parrafo = 'Curso de Manipulacion de Arrays';

const url = parrafo.split(' ').join('-').toLowerCase();
console.log(url);
