/*
problem
=======
Given an object, pull all the vowels from arrays of strings without using for and while loop. Use forEach method.

example
=======
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

DS
==
Input: object
Output: string/ array

Interemdiate variables
1. array holding values of the object containing array of strings
2. an empty array holding the vowels from the strings
3. a constant array holding the five vowels

Algo
====
1. Store all the values of the object in an array -> result is a nested object
2. Use forEach method to iterate through each of the sub arrays
3. Again use forEach to iterate through each string
4. Split the string into an array of characters.
5. Iterate through each char and compare with the constant array of vowels
    a. If char is a vowel push it to the resulting array
    b. if not, continue with the next iteration
6. Display the resulting array
*/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function listVowels(object) {
    let nestedStrings = Object.values(object);
    let result = [];
    
    nestedStrings.forEach(subarray => {
        subarray.forEach(word => {
            let charsInWord = word.split("");
            charsInWord.forEach(char => {
                if (VOWELS.includes(char)) result.push(char);
                // else continue;
            })
        })
    })
    
    return result;
}

console.log(listVowels(obj));