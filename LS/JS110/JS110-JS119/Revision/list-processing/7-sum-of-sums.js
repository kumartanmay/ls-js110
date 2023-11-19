/*
given an array of numbers, return sum of each leading subsequence.

example
=======
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

ds
==
input: array
output: number

other variables
a variable to store intermittent sum

algo
====
1. Initiate a variable and assign an initial value zero to it
2. At each iteration, iterate over each element of the array until the count of iteration and add it to the variable
3. Return the variable at the end of iteration

*/

function sumOfSums(arr) {
    let result = 0;
    arr.forEach((elem, index) => {
        for(let i = 0; i <= index; i++) {
            result += arr[i];
        }
    });
    return result;
}

console.log(sumOfSums([1,5,7,3]));