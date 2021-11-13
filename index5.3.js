const camelize = function(String) {
    if (String === "") {
        return "";
    }

    if (String.indexOf("-") !== -1) {
        strArray = String.split("-")
    }else {
        strArray = String.split("_");
    }

    let ccString = strArray[0];

    for (let i = 1; i < strArray.length; i++) {
        ccString += capitalize(strArray[i]);
    }
    return ccString;
}

let capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(camelize("the-stealth-warrior"));
console.log(camelize("The_Stealth_Warrior"));