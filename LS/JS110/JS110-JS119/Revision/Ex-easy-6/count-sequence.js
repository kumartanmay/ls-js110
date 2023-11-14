/*
given count and starting number, return an array with count number of elements
the elements are multiples of the starting number

example
=======
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

ds
==
input: two integers
output: an array

algo
====
1. Initiate an empty array which will hold the result
2. Iterate a loop until the given count to assign multiples of the starting number to the array
3. return the array at the end of iteration
*/

function sequence(count, startingNumber) {
    let result = [];
    for(let counter = 1; counter <= count; counter += 1) {
        result.push(startingNumber*counter);
    }
    
    return result;
}

console.log(sequence(5,1));
console.log(sequence(4,-7));
console.log(sequence(4,0));
console.log(sequence(0,10000));