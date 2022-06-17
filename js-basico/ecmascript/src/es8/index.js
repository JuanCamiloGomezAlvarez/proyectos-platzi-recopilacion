//ECMASCRIPT 8
// object.entries
const data = {
  frontend: 'Juan ',
  backend: 'Camilo',
  desing: 'Brenda',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object.values

const values = Object.values(data);
console.log(values);
console.log(values.length);

//padStart y padEnd

const namel = 'Juan';
console.log(namel.padStart(13, 'hola soy '));
console.log(namel.padEnd(13, '  Camilo'));
console.log('food'.padEnd(12, ' ---'));

//Async Await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('test Error'));
  });
};

const AsyncFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    new Error('Error');
  }
};

AsyncFunction();
