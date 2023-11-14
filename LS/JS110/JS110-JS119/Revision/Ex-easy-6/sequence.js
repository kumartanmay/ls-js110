/*
given a number, return an array of numbers starting from 1 until the given number in ascending order. Both inclusive

example
=======
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

ds
===
input: number
output: array

algo
====
1. initiate a blank resulting array which will store the result
2. iterate a counter starting from 1 until the given number and store the counter in the resulting array
3. return the resulting array at the end of iteration
*/

function sequence(num) {
    let result = [];
    for(let counter = 0; counter < num; counter+=1) {
        result.push(counter+1)
    }
    
    return result;
}

console.log(sequence(5));
console.log(sequence(1));