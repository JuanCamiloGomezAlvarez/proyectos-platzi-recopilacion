const array = ['hola', 'soy', 'un', 'array'];

const newArray = [];

// con este for lo que busco es encontrar un elemente con determinado numero de caracteres
// en este caso mayores o iguales a 5
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element.length >= 5) {
    newArray.push(element);
  }
}
console.log(array);
console.log('usando For', newArray);

// usando filter reduzco el numero de lineas en mi codigo
const ArrayFilter = array.filter((item) => item.length >= 5);
console.log('usando filter ', ArrayFilter);

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

// con filter puedo retornar valores con condiciones predeterminadas
const delivered = orders.filter((item) => item.delivered && item.total >= 150);
console.log(delivered);

// usando un query para buscar elementos en un array con los metodos filter e includes

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(
  ' este array contiene los elementos que tenga la letra i en customerName ',
  search('i')
);
