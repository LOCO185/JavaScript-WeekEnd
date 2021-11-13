const arr1 = [19, 5, 42, 2, 77];
function func1(arr1) {
    let low1 = Math.min(...arr1);
    arr1.splice(arr1.indexOf(low1), 1);
    let low2 = Math.min(...arr1);
    return low1 + low2;
}
console.log(func1(arr1));



