let a = 1; // a = 0;
let b = 1; // b = 0; 
let c = 1; // c = 1;
const tribonacci = function (n) {
  for (let i = 3; i < n; i++) {
    let next = a + b + c;
    a = b;
    b = c;
    c = next;
    console.log(c);
  }
  return c;
};
tribonacci(12);
