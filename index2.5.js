function numberSum(n) {
    let total = 0;
      for(let i = 1; i <= n; i++){
        total += i;
      }
      return total;
}

console.log(numberSum(2));
console.log(numberSum(3));
console.log(numberSum(8));