/*
given an array of strings, return an array with vowels removed from the strings.
modify the same array. do not return a new array.

ex
==
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

ds
==
input: array
output: same array

other variables: 
constant for holding the vowels

function to determine vowel

algo:
====
1. Iterate through each element of the array
2. Convert the string element into an array
3. filter the non-vowel characters and join it.
4. Return the resulting array
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(arr) {
    return arr.map(elem => {
        let strArr = strToArr(elem);
        return strArr.filter(char => !isVowel(char)).join("");
    });
}

function strToArr(str) {
    return str.split("");
}

function isVowel(char) {
    return vowels.includes(char.toLowerCase());
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]