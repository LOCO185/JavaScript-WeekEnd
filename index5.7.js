function findShortestWordLength(str) {
    let words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length < words[0].length) {
        minLength = words[i].length;
      }
    }
    return minLength;
}

console.log(findShortestWordLength("jawad ate hamburger"));