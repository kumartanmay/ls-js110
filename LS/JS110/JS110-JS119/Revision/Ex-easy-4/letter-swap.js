/*
PROBLEM:
========

Given a string, swap first and last letter of each word in the string.
Maintain case of the letters.
Each word consists of letters only.
Each string has at least one word.

EXAMPLE:
========
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

DATA STRUCTURE:
===============

1. Input: string
2. Output: new string
3. Intermittent variables: array to perform operations to words of the string

ALGO:
====

1. Split the string into an consisting of words
2. Iterate through each word in the array, swap the first and last letter of the word
    2.1 Find the length of the word
    2.2 create a new word by swapping the first and last letters of the word
        2.2.1 new word is oldWord[oldWord.length - 1] + oldWord.splice(1,oldWord.length -1) + oldWord[0]
    2.3 push the new word into the new array
3. Display the new array at the end of iteration

*/

function swap(string) {
    let stringArray = string.split(" ");
    
    let newStringArray = stringArray.map(word => word[word.length-1] + word.slice(1,word.length-1) + word[0]);
    console.log(newStringArray.join(" "));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"