//sort me muta el array que este usando

const months = ['march', 'january', 'may', 'febuery', 'december'];

const rta1 = months.sort();
console.log('ordenado de forma al peso en ASCII ', rta1);

const numbers = [1, 4, 6, 100, 45];

const rta2 = numbers.sort();
console.log('ordenado de forma al peso en ASCII ', rta2);
//el metodo sort tiene en cuenta el peso de los caracteres en ASCII
// para ordenar numeros deberiamos poner algunos condicionales

const rta3 = numbers.sort((a, b) => a - b);
console.log(
  'ordenado de forma correcta usando un arrow function para modificar ',
  rta3
);

const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: new Date(2021, 1, 3, 15),
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2021, 2, 12, 15),
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: new Date(2021, 3, 31, 15),
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(2021, 4, 6, 15),
  },
];

const getByDate = orders
  .sort((a, b) => a.date - b.date)
  .map((item) => item.date);

console.log(getByDate);
console.log(orders);

const array = ['a', 'bb', 'cccc'];

const rta4 = array.map((item) => item.length);
console.log(rta4);
