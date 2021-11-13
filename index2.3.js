function findNextSquare(n) {
  // Optimal solution
  // return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  // Return the next square if sq if a perfect square, -1 otherwise
  let curVal = Math.sqrt(n) + 1;
  let nextSq = Math.sqrt(n) + 1;
  nextSq *= nextSq;

  //console.log(sq)
  //console.log(currentNumber)
  //console.log(nextSq * nextSq)

  if (nextSq == Math.floor(curVal * curVal))
    //console.log(nextSq * nextSq)
    return nextSq;
  else return -1;
  //console.log(-1)
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
