const array = ['cat', 'dog', 'cow'];

let = item = false;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element === 'cow') {
    item = true;
  }
}

const rta = array.includes('cow');
console.log('item ', item);
console.log('rta ', rta);
