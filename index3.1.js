function nbYear(p0, percent, aug, p) {
  let percent2 = (p0 * percent) / 100;
  pop_total = p0 + percent2 + aug;
  let number_of_years = 1;

  while (pop_total < p) {
    percent2 = (pop_total * percent) / 100;
    pop_total = pop_total + percent2 + aug;
    number_of_years += 1;
  }

  return number_of_years;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
