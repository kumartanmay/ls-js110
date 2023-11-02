/*
PROBLEM
=======
Find whether a number is palindrome.
A number is a palindrome when reversed is same as the original.

EXAMPLE
=======
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

DATA STRUCTURE
==============
Input: Number
Output: Boolean

Intermittent variables from input to output:
1. Reversed number
2. Input number -> string -> array of numbers -> reverse, join and convert to number

ALGO
====
1. Reverse the input number
    1.1 Convert it into a string of chars
    1.2 Split the chars into an array
    1.3 Reverse the array and join
    1.4 Convert the joined string into a number
2. Compare the original with the reversed number and return a boolean
*/

function isPalindromicNumber(num) {
    return num === reversed(num);
}

function reversed(num) {
    return Number(String(num).split('').reverse().join(''));
}

// console.log(reversed(12345));

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(500));
console.log(isPalindromicNumber(007));