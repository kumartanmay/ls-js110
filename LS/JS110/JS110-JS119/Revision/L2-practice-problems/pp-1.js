/*
PROBLEM:
========
Sort an array of numbers of string type by their numerical value

Q: Will the result be an array of numbers or strings? 
If it is a string then we can convert into string.

EXAMPLE:
=======
let arr = ['10', '11', '9', '7', '8'];
result: ["7", "8","9","10","11"]

Data Structure:
==============
Input: an array
ouput: an array

Convert each element of the array into number

ALgo:
====
1. Iterate over element of the array and convert it into number
2. Each number can be mapped to a new array
3. Then the elements of the array can be sorted by value
4. After sorting run another loop to convert the numbers to string
*/

function sortNumberStrings(array) {
    let arrayNumbers = convertStringToNumbers(array);
    arrayNumbers.sort((a,b) => b - a);
    return convertNumbersToString(arrayNumbers);
}

function convertStringToNumbers(array) {
    return array.map(elem => +elem)
}

function convertNumbersToString(array) {
    return array.map(elem => `${elem}`)
}

console.log(sortNumberStrings(['7',"8","9","10","11"]));