listaUno = ['a', 'b', 'c'];

const listaDos = listaUno.map((item) => item + '++');

console.log(listaUno);
console.log(listaDos);

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

const rta = orders.map((item) => item.total);
console.log('rta ', rta);
