let a = 0;
let b = 1;

const fibonacci = function (n) {
  for (let i = 2; i < n; i++) {
    let next = a + b;
    a = b;
    b = next;
    console.log(b);
  }
  return b;
};
fibonacci(13);
