const array = [1, 2, 3, 4];

let valorAcumulado = 0;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  valorAcumulado = valorAcumulado + element;
}
console.log(array);
console.log('este es el acumulado usando for', valorAcumulado);

const total = array.reduce((item, nextItem) => item + nextItem, 0);
console.log('este es el acumulado usando reduce', total);

// ahora un ejemplo con strings

const array2 = ['hola', 'soy', 'un', 'array'];

let juntandoStrings = '';
for (let index = 0; index < array2.length; index++) {
  const element = array2[index];
  juntandoStrings = juntandoStrings + element;
}

console.log(
  'este ejemplo es con string y con el metodo for: ',
  juntandoStrings
);

const total2 = array2.reduce((item, nextItem) => item + nextItem, '');
console.log('usando reduce con string:', total2);
