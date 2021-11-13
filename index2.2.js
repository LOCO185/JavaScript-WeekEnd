const binrayFunc = (binary) => {
        return (parseInt(binary.join(''), 2));
    }

console.log(binrayFunc([0, 0, 0, 1]));
console.log(binrayFunc([0, 1, 0, 1]));
console.log(binrayFunc([0, 1, 1, 1]));


//another way to solve.

// function bin_to_dec(bstr) {
//     return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
//  }
//  console.log(bin_to_dec([1 ,1 ,0 ,1]));
//  console.log(bin_to_dec([1 , 0, 0, 0]));
//  console.log(bin_to_dec([0, 1, 0, 0]));