const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let rta1 = undefined;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element == 3) {
    rta = element;
  }
}

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

const rta2 = products.find((item) => item.id === '🍕');
const rta3 = products.findIndex((item) => item.id === '🍕');

console.log('rta2 ', rta2);
console.log('rta3 ', rta3);
