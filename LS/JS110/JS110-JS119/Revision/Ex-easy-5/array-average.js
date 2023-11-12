/*
given an array of positive numbers, return the integer part of the average of sum of numbers

example
======
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

ds:
==
input: array
output: number

algo:
=====
1. reduce the array to sum of its numbers
2. find the average
3. Return the integer value of the average
*/

function average(arr) {
    return parseInt(arr.reduce((a,b) => a + b) / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40