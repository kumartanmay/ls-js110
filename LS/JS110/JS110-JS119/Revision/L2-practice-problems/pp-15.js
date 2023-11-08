/*
problem
=======
Given an arrays of objects containing numbers only. Return an array of objects containing even numbers only.

example
=======
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

result = [{ e: [8], f: [6, 10] }]

ds
==
input: array of objects
output: array of objects

intermittent variables
a boolean to check the even values in the array

algo
====
1. Iterate through each object in the array
2. For each object property, return true when each element is even
3. In case of true, push the object in the resulting array
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// let result = arr.filter(obj => Object.values(obj).map(array => array.every(elem => elem % 2 === 0)));
// let valueArrays = [];

let newArr = arr.filter( obj => Object.values(obj).every(array => array.every(value => value % 2 === 0)))

// console.log(valueArrays);
console.log(newArr);