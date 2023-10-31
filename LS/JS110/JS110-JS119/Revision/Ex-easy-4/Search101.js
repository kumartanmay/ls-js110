/*
PROBLEM:
=======
For every sixth number entered by the user, find whether it existed in the previous five numbers.

EXAMPLES:
========
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

DATA STRUCTURES:
================

Input: String
Output: String

Intermediate: An array to store all the six numbers entered


ALGORITHM:
1. Take six inputs from the user.
2. Coerce it into a number and push each one into an array
3. Pop the last element from the array and check whether it exists in the remaining five elements
4. If yes, display the message - The number appears in the array
5. If no, display the message - The number does not appear in the array

*/

const readline = require('readline-sync');
let inputArray = [];

function searchSixthNumber(array) {
    
}

for (let counter = 0; counter < 6; counter++) {
    let numberStr = readline.question(`Please enter ${counter + 1} number: `);
    inputArray.push(Number(numberStr));
}

let sixthNumber = inputArray.pop();

if(inputArray.includes(sixthNumber)) {
    console.log(`The number ${sixthNumber} appears in ${inputArray}.`);
} else {
    console.log(`The number ${sixthNumber} does not appear in ${inputArray}.`);
}