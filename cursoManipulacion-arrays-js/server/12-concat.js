const elements = [1, 2, 3, 4, 5];
const elementsTwo = [6, 7, 8];
const elementsThree = [9, 0];

//mediante un for
for (let index = 0; index < elementsTwo.length; index++) {
  const element = elementsTwo[index];
  elements.push(element);
}
console.log(elements);
// recuerda que elements se a modificado en el for y por eso es [1,2,3,4,5,6,7,8]
const rta = elements.concat(elementsThree);
console.log(rta);
