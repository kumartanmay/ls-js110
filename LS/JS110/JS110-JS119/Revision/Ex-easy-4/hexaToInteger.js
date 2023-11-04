/*
PROBLEM:
=======

Given a hexadecimal number convert it into an integer without using JS coercion methods

EXAMPLE
=======
hexadecimalToInteger('4D9f') === 19871;

DS:
===
Input: string
Output: number
Intermittent variables:
    1. An object to store the decimal equivalents of hexadecimal numbers
    2. An array storing all the chars of the hexadecimal number
    3. An array storing the corresponding decimal equivalents of the input hexadecimal string

ALGO:
=====
1. Create an object with integer values of hexadecimal numbers
2. Map each char of hexadecimal number to the corresponding digit and store in a new array
3. Reduce the elements of the new array into the decimal value
*/

function hexadecimalToInteger(string) {
    const DIGITS = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    }
    
    let hexDigits = string.split("").map( char => DIGITS[char.toUpperCase()]);
    let value = 0;
    hexDigits.forEach(digit => value = value * 16 + digit)
    console.log(value);
}

hexadecimalToInteger('4D9f') === 19871;