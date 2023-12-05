/*
Given the length of digits in a fibonacci series, return the index of the number in the series.

ex
==
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

ds:
==
input: number (count of digits in a number)
output: number (index of the numbers in the series)

other vars:
an array to store the fibonacci series
a function to calculate the fibonacci series

algo
====
1. create function for generating fibonacci series.
2. At each new number, calculate the length of the number and compare it with input.
3. If it is lesser than the input, continue with the fibonacci series
4. Else, return the index of the number in the series
*/


function fibonacciIndexByLength(digit) {
    let fibonacciSeries = [1n, 1n];
    let index;
    for(index = 3n; lengthOf(fibonacciSeries[index - 2n]) < digit; index++) {
        fibonacciSeries[index - 1n] = fibonacciSeries[index - 2n] + fibonacciSeries[index - 3n];
        // console.log(fibonacciSeries);
    }
    return index - 1n;
 }

function lengthOf(number) {
    return String(number).length;
}

console.log(fibonacciIndexByLength(2n));
console.log(fibonacciIndexByLength(3n));
console.log(fibonacciIndexByLength(10n));
console.log(fibonacciIndexByLength(16n));
console.log(fibonacciIndexByLength(100n));
console.log(fibonacciIndexByLength(1000n));
console.log(fibonacciIndexByLength(10000n));