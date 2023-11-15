/*
given a number, return an array consisting of list of numbers consisting it.

example
======
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

ds
==
input: number
output: array

other variable
a string which is stores the numerical value

algo
====
1. convert the input into a string
2. Split the string into an array of numbers
3. iterate through the array to convert each element into a number
*/

function digitList(num) {
    let numStr = String(num);
    let numArr = numStr.split("");
    // console.log(numArr);
    let output = numArr.map(elem => Number(elem));
    console.log(output);
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]