/*
Given a number, return the reverse of it. If there are trailing zeros in the original number, the reversed number
should not contain leading zeroes.

Assumption: input will always be a positive number

example
=======
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

ds
==
Input: number
Output: number

other variables:
a string to convert and reverse the number

algo:
===
1. Convert the number into a string and reverse it.
2. Convert the reversed string to a number.
*/

function reverse(number) {
    let numString = String(number);
    return Number(numString.split("").reverse().join(""));
}

console.log(reverse(21));
console.log(reverse(1200));
console.log(reverse(1));
