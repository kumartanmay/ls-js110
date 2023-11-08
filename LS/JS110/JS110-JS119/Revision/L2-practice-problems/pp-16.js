/*
Given a nested array, return an object where the keys are first element of the subarray and values are the second element.
Each nested array has two elements only
example
=======
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

ds
==
Input: Nested array with heterogenous elements
Output: An object

Algo
====
1. Iterate through subarrays of the array
2. Create an object with first element as the key and the next element as its value
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = {};
arr.forEach(subarray => {
    obj[subarray[0]] = subarray[1];
})

console.log(obj);