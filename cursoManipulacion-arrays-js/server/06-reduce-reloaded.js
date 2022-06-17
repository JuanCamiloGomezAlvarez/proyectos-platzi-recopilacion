const array = [1, 2, 3, 1, 3];

const answer = array.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});
console.log(answer);

const data = [
  {
    name: 'Nicolas',
    level: 'low',
  },
  {
    name: 'Andrea',
    level: 'medium',
  },
  {
    name: 'Zulema',
    level: 'hight',
  },
  {
    name: 'Santiago',
    level: 'low',
  },
  {
    name: 'Valentina',
    level: 'medium',
  },
  {
    name: 'Lucia',
    level: 'hight',
  },
];

const answerTwo = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});
console.log(answerTwo);

const arrayTwo = [1, 2, 3, 4, 5, 4, 3, 1, 5, 10, 9, 8, 7, 6, 4, 10, 9, 8];

const answerThree = arrayTwo.reduce(
  (obj, item) => {
    if (item >= 1 && item <= 5) {
      obj['1-5'] += 1;
    } else if (item >= 6 && item <= 8) {
      obj['6-8'] = obj['6-8'] + 1;
    } else {
      obj['9-10'] += 1;
    }
    return obj;
  },
  {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
  }
);
console.log(answerThree);
