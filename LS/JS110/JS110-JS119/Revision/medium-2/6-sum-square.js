/*
given a number, return the difference between square of sum of numbers and sum of square of numbers

ex:
===
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

ds:
input: number
output: number

other vars

function square of sum of numbers
input: number
output: number

var to store sum
algo
====
iterate starting from 1 to the number and reassign the sum
return square of the sum

function sum of squares of numbers
input: number
output: number
algo
===
iterate starting from 1 until the number
square the number and add to the sum
return the sum

algo:
====
1. return the difference of both the functions
*/

function squareOfSums(number) {
    let sum = 0;
    for(let count = 1; count <= number; count++) {
        sum += count;
    }
    return sum * sum;
}

function sumOfSquares(number) {
    let sum = 0;
    for (let count = 1; count <= number; count++) {
        sum = sum + count*count;
    }
    return sum;
}

function sumSquareDifference(num) {
    return squareOfSums(num) - sumOfSquares(num);
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));