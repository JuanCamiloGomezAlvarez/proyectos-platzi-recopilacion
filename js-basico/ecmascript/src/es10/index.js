//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada,
//recibe como argunmento la profundidad
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(3));

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array1 = [1, 2, 3, 4, 5];

console.log(array1.flatMap((value) => [value, value * 2]));

//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello1 = 'hello world                  ';
console.log(hello1);
console.log(hello1.trimEnd()); // final

//-------------optional catch biding-------------/

try {
} catch /*(error) ya no es necesario colocarlo*/ {
  error;
}

//-------------fromEntries----------------------/
// array to object
let entries = [
  ['name', 'oscar'],
  ['age', 32],
];
console.log(Object.fromEntries(entries));

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
