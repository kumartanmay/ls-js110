/*
PROBLEM:
========
Takes an array and returns an array of equal length which has elements as running total of the original array.
All the elements of the array are numbers. 

EXAMPLE
=======
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

DATA STR:
========
Input: Array
Output: Array

Variable to store the running total of the previous element

ALGO
====
1. For each element in the array
*/

function runningTotal(array) {
    if (array.length > 0) {
        let total = 0
        return array.map(num => total+= num);
    }
    return array;
}

console.log(runningTotal([1,3,4,5,6]));
console.log(runningTotal([2,5,13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));