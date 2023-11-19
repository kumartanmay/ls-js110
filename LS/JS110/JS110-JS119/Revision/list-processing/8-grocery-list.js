/*
given a two dimensional array, each subarray containing name of a fruit and its count, 
return an array with the fruit name repeated as many time as its count

example
=======
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

ds
==
input: two dimensional array
output: a new array

algo
====
1. Iterate over each element of the array
2. In each subarray, push the fruit name as many times as the count into the output array
*/

function buyFruit(arr) {
    let result = [];
    arr.forEach(subArray => {
        for(let i = 0; i < subArray[1]; i++) {
            result.push(subArray[0]);
        }
    });
    
    return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));