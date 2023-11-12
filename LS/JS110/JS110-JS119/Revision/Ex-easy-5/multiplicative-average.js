/*
given an array of numbers, multiply the numbers and return average of multiplication rounded to three decimal places

example
=======
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

ds
==
input: an array of numbers
output: floating point

other variables:
multiplication of all the numbers

algo
====
1. reduce the array of numbers by multiplying all the numbers
2. Find the average and round it upto three decimal places
*/

function multiplicativeAverage(array) {
    let multiplication = array.reduce((a,b)=> a * b, 1)
    let average = multiplication/array.length;
    return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"