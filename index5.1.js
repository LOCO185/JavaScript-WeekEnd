
const func1 = function (String) {
    if (String.length > 2) {
    const result = String.substring(1, String.length-1);
    return result;
    }else return String;
}
console.log(func1('@i love food@'));