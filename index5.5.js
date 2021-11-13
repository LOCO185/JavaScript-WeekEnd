function initialName(string) {
    const array = string.split(" ");
    return (array[0][0] + "." + array[1][0]).toUpperCase();
 }
console.log(initialName("Sam Harris"));
console.log(initialName("Patrick Feeney"));