/*
PROBLEM:
========
Given a number, return the string value of it without using any JS coercion methods

EXAMPLE:
========
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

DATA STRUCTURE:
===============
Input: Number
Output: String

Algo
====
1. Use String interpolation to log the string value
*/

function integerToString(number) {
    console.log(`${number}`);
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"