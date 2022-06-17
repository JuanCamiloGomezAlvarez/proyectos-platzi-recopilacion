//Este archivo contiene información relacionada con las caracteristicas nuevas que posee ecmascript6+
// Caracteristicas nuevas

//PARAMETROS POR DEFECTO
// en versiones anteriores
function newFunction(name, age, country) {
  var name = name || 'camilo';
  var age = age || 29;
  var country = country || 'Col';
  console.log(name, age, country);
}
newFunction();
//en la nueva version de ecmascript6

function newFunction2(name = 'camilo', age = 29, country = 'CO') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('juan', 30, 'IS');

//TEMPLATE LITERAL
// en versiones anteriores

let hello = 'HELLO ';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// en la version actualizada

let hello2 = 'HELLO ';
let world2 = 'world';
let epicPhrase2 = `${hello2} ${world2}`;
console.log(epicPhrase2);

//MULTILINEA

//en la version anterio
let lorem =
  'soy exitoso y siempre logro lo que me propongo \n' +
  'siempre estoy aprendiendo cosas nuevas y mejorando mis habilidades';

// en esta nueva version
let lorem2 = `soy exitoso y siempre logro lo que me propongo 
siempre estoy aprendiendo cosas nuevas y mejorando mis habilidades`;
console.log(lorem2);

//DESTRUCTURACION DE ELEMENTOS

//versione anteriores

let person = {
  name: 'oscar',
  age: 32,
  country: 'MX',
};

console.log(person.name, person.age);

//version actual

let { name, age, country } = person;
console.log(name, age, country);

//OPERADOR DE PROPAGACION
//en está version

let team1 = ['juan', 'camilo'];
let team2 = ['luisa', 'fernanda'];
let hijos = ['alvarez', 'gomez', ...team1, ...team2];
console.log(hijos);

//PROPIEDAD DE OBJETO MEJORADA

let nombre = 'Camilo';
let edad = '28';
//vetrsiones anteriores es5
obj = { nombre: nombre, edad: edad };
//nueva version es6
obj2 = { nombre, edad };
console.log(obj2);

//ARROW FUNCTIONS son funciones que retornan un valor

const names = [
  { name: 'camilo', age: 28 },
  { name: 'brenda', age: 28 },
];
//es5 o anteriores
let listOfNames = names.map(function (items) {
  console.log(items.name);
});
//es6
let listOfNames2 = names.map((item) => console.log(item.name));
// con => que remplaza a una funcion logro recortar el codigo de forma muy optima

const square = (num) => num * num;

//PROMESAS (ASINCRONISMO)
//javascript no es un lenguaje sincronico

// Generando una promesa

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey');
    } else {
      reject('Ups!!');
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//CLASES

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    let result = this.valueA + this.valueB;
    return `la suma de ${this.valueA} mas ${this.valueB} es: ${result}`;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//MODULOS (IMPORT Y EXPORT ) TRABAJAR CON MODULOS
// de el archivo module.js voy a importar la funcion hello

import { hello } from './module';

hello();

//GENERADORES
// son funciones especiales que retornan una
//serie de valores segun el algoritmo definido

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
