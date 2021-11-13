const array = [[5,0],[5,5],[5,5]];

const number = function (array) {
  let peopleIn = 0;
  let peopleOut = 0;
  for (let i = 0 ; i < array.length-1 ; i++) {
    peopleIn += array[i][0];
    peopleOut += array[i][1];
  }
  return peopleIn - peopleOut;
};
console.log(number(array));