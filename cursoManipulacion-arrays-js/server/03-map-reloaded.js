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
// a continuacion lo que quiero es crear un nuevo array basado en el anterios
// que tenga un tax. pero esto sin afectar el array original

const newAtributte = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log('orders ', orders);
console.log('newAtributte ', newAtributte);
