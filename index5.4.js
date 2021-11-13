const weirdCase = function(string) {
    string = string.toLowerCase().split(' ')

    for(let i = 0; i < string.length; i++) {
        string[i] = string[i].split('');
        for (let j = 0; j < string[i].length; j++) {
            if (j % 2 == 0) {
                string[i][j] = string[i][j].toUpperCase();
            }
        }
        string[i] = string[i].join('');
    }
    return string.join(' ');
}

console.log(weirdCase("String"));
console.log(weirdCase("Weird string case"));