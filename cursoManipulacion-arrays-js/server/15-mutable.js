const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const elementFinded = products.find((item) => item.id === '🍔');
console.log('elemento encontrado', elementFinded);

const solutionOne = myProducts.push(elementFinded);

console.log('myProducts ', myProducts);
console.log('products', products);

const elementFindedIndex = products.findIndex((item) => item.id === '🍕');

if (elementFindedIndex != -1) {
  myProducts.push(products[elementFindedIndex]);
  products.splice(elementFindedIndex, 1);
}

console.log('myProducts ', myProducts);
console.log('products', products);

const update = {
  id: '🍕',
  changes: {
    price: 300,
    description: ' delicioso',
  },
};

const elementFindedIndexDos = myProducts.findIndex(
  (item) => item.id === update.id
);

myProducts[elementFindedIndexDos] = {
  ...myProducts[elementFindedIndexDos],
  ...update.changes,
};

console.log(myProducts);
