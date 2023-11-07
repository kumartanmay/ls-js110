/*
prob
====
Given a nested array, sort the sub array based on sum of odd numbers in it.

example
=======
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
result = [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

ds
==
input: a nested array
output: a new nested array

intermittent variables:
a variable to store the sum of odd numbers 

algo
====
1. use map method to maintain the structure of the original array in the result
2. iterate through subarray and sort it by summing the odd numbers in the subarray
*/

function sortSumOddNumbers(array) {
    let result = array.slice();
    result.sort((a,b) => {
        if (a.filter(num => (num % 2 === 1)).reduce((a,b) => a + b,0) > b.filter(num => (num % 2 === 1)).reduce((a,b) => a + b,0)) return 1;
        else if (a.filter(num => (num % 2 === 1)).reduce((a,b) => a + b,0) < b.filter(num => (num % 2 === 1)).reduce((a,b) => a + b,0)) return -1;
        else return 0;
    })
    return result;
}

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
console.log(sortSumOddNumbers(arr));