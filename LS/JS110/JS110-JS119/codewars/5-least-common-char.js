/*
given a string, return the string with least common occurences.
if there are multiple chars with multiple occurences, return the first char
the chars are insensitive when counting

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

{
  T: {f:1, i:[0]}, h: {f:1, i:[1]},   i: {f: 3, i:[]},
  s: 3, ' ': 3, a: 1,
  t: 1, r: 1,   n: 1,
  g: 1, '.': 1
}

algo
1. create an object containing the char and array of indices as key value pairs
2. return the key with lowest length of array -> in case of clash, find the char with lowest index
*/

function leastCommonChar(str) {
    let objCharIndices = {};
    let strArr = str.toLowerCase().split('');
    
    strArr.forEach((char, index) => {
        objCharIndices[char] ? objCharIndices[char].push(index) : objCharIndices[char] = [index] ;
    })
    
    let indexLeastCommonChar = lowestArrayLength(objCharIndices)[0];
    return strArr[indexLeastCommonChar];
}

//find values with lowest length

function lowestArrayLength(obj) {
    let valuesArr = Object.values(obj);
    return valuesArr.sort((a,b) => a.length - b.length)[0];
}


console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');
