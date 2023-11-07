/*
prob
====
Given a nested array of numbers, return an array with similar structure which has multiples of 3 only

example:
=======
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
result = [[],[3],[9],[15,18]]

ds:
==
input: array
output: array with a similar structure

algo:
1. iterate through the subarrays using the map method to maintain the structure of the resulting array
2. filter multiples of three from each subarray
*/

function multiplesOfThree(nestedArray) {
    return nestedArray.map(subArray => {
        return subArray.filter( num => (num % 3) === 0)
    })
}

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
console.log(multiplesOfThree(arr));