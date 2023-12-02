/*
given a number and the index from the right, shift the number at the index to the right most position
input will always be a number

ex
==
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

ds
===
input: number, index
output: number

other vars
1. a string form of the number
2. an array holding the digits of the number
3. a function to split the numbers into its digits

algo
====
1. Split the number into its constituent digits
    a. Convert the number to a string
    b. Split the string into an array of the digits
2. Concat the following:
    a. Sliced array from the start until the index from the right, and
    b. Concat the sliced array from the next element and the element at the index from right
3. Join the elements of the array and coerce it to number
4. return the number
*/

function digitsOfNumber(num) {
    return String(num).split("");
}

function rotateRightmostDigits(num, index) {
    let digits = digitsOfNumber(num);
    let result = digits.slice(0,digits.length-index)
                        .concat(digits.slice(digits.length-index + 1),digits[digits.length-index]);
    console.log(Number(result.join("")));
}

// console.log(rotateRightmostDigits(123456,2)); //123465
// console.log(rotateRightmostDigits(123456,3)); //123564
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917