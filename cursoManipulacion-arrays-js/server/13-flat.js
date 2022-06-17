const { is } = require('date-fns/locale');

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const elementI = matriz[i];
  for (let j = 0; j < elementI.length; j++) {
    const elementJ = matriz[i][j];
    newArray.push(elementJ);
  }
}
console.log(newArray);
// en la funcion que hay a continuacion tenemos un ejemplo de recursividad en la funcion para
//asi poder resolver la matriz y volverla un array
const matriz2 = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [3, 4]]],
  [7, 8, 9],
];
let newArray2 = [];
function functionRecursive(list) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element.length > 1) {
      functionRecursive(element);
    } else {
      newArray2.push(element);
    }
  }
  return newArray2;
}

console.log(functionRecursive(matriz2));
