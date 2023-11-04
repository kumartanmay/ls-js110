/*
PROBLEM:
========
Convert a string of numbers into a number without using any JS coercion methods.

EXAMPLE:
========
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

DATA STRUCTURE:
===============
Input: String
Output: Number
Intermittent variables: array holding each char of the string as an element

ALGO:
====
1. Use unary + operator to convert string into a number
*/

function stringToInteger(string) {
    return +string;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true