/*
given first name and last name, return a string with last name, comma, space and first name.

Assumption: 
Each input is a string consisting of first name and last name only
First name and last name are separated by a whitespace only

example
=======
swapName('Joe Roberts');    // "Roberts, Joe"

ds
==
1. Input: string
2. Output: string

other variable
An array

algo:
====
1. convert the input string into an array consisting of names
2. Reverse the array
3. Join the reversed array delimited by comma and whitespace
*/

function swap(name) {
    let nameArr = name.split(" ");
    return nameArr.reverse().join(", ");
}

console.log(swap("Kumar Tanmay"));