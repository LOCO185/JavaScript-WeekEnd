const maskify = function(string) {
    return string.slice(0, -4).replace(/./g, '#') + string.slice(-4);
}

console.log(maskify("4556364607935616"));
console.log(maskify(     "64607935616"));
console.log(maskify(               "1"));
console.log(maskify(                '""'));