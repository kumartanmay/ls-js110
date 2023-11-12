/*
given a number, return a list of digits comprising it

example
=======
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

ds:
===
input: number
output: array of numbers

algo:
====
1. Coerce the input number into a string and split into an array
*/

function digitList(num) {
    let array = String(num).split("");
    return array.map(elem => Number(elem));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]