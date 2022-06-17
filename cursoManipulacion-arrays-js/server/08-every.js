const numbers = [1, 2, 3, 5, 6, 8, 9, 21, 34, 144];

let rta = null;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element <= 40) {
    rta = false;
  }
}
console.log('rta : ', rta);

const rta2 = numbers.every((item) => item <= 40);
console.log('rta2 : ', rta2);

const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

const rta3 = team.every((item) => item.age >= 18);
console.log('rta3 : ', rta3);
