/*
You have a bank of switches before you, numbered from 1 to count. 
Every switch is connected to exactly one light that is initially off. 
You walk down the row of switches and toggle every one of them, that is, you flip every switch. 
All the lights are now on. You walk back to the beginning of the row and start another pass.
On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. 
On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. 
You continue to repeat this process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns an array of the lights 
that are on after count passes.

PROBLEM:
========
Input: Array of n elements, each element is same
Output: Array

Info:
1. Toggle means switching the state of the buld from its present state. 
2. Number of rounds of toggling  = Number of lights
3. Each round toggles bulbs positioned at multiples of the round count 

EXAMPLES:
=========
function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Mental model: Output is list of perfect squares of less than or equal to the count

Data Structure:
Input: Array
Output: Array

Algo:
1. Consider bulb as boolean: off: false and on: true
2. Create an arrangement of bulbs as an array of boolean values
3. At iteration, toggle the boolean value until the rounds are equal to count of bulbs
    3.1 Nth round will toggle all the boolean values positioned at multiples of N,
4. Filter the desired boolean values in a new array
*/

function lightsOn(count) {
    // create an arrangement of bulbs in the form of an array, all in switched off state
    let bulbs = []
    for (let i = 0; i < count; i++) {
        bulbs.push(false);
    }
    // toggling the status of bulbs after each round
    for (let j = 1; j <= count; j++) {
        bulbs.map((bulb, index) => {
            if((index+1) % j === 0) bulbs[index] = !bulb;
            return bulb;
        })
    }

    // filtering the truthy values from the array after count passes
    let result = [];
    bulbs.filter((elem, index) => {
        if (elem === true) result.push(index + 1);
        return result;
    });

    return result;
}

console.log(lightsOn(100));