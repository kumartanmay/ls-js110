/*
given a string, repeat each character of the string if it is not a vowel, punctuation or whitespace.
In case of empty string, return the original string.

Assumption: input will always be a string

example
=======
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

ds:
==
input: string
output: new string

other variables: an array of vowels

algo
====
0. Initiate an empty string.
1. Iterate over each character of the string, if it is not an empty string.
2. Repeat each character of string if it is not a punctuation, whitespace or vowel and concatenate it to the initiated string
3. return the initiated string
*/

const VOWELS = ['a','e','i','o','u'];

function doubleConsonants(str) {
    let result = "";
    
    if (str){
        str.split("").forEach(char => {
            if (char.toLocaleLowerCase() >= 'a' && char <= 'z' && !VOWELS.includes(char)) {
                result += char.repeat(2);
            } else {
                result += char;
            }
        })
    }
    
    console.log(result);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""