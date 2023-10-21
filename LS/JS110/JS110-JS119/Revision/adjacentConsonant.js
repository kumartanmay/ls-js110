/*
SORT STRING BY MOST ADJACENT CONSONANT

PROBLEM
=======

Input: An array of strings
Ouput: A new sorted array of strings by highest number of adjacent consonants

Questions:
---------
What is an adjacent consonant?
Consecutive consonants in a word or separated by space between two words

Does the input array contain each element as a single string or is it a combination of strings?
If each element consists of single word, then which word gets the vote when adjacent consonants are separated between two words?

Explicit Rules:
---------------
1. Two strings containing the same number of adjacent consonants will appear in the same order as original
2. 

Implicit rule:
--------------
1. Adjacent consonants between two words are counted only when it is part of the same element of the array
2. All letters except a,e,i,o,u are consonants

EXAMPLE:
========
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

DATA STRUCTURE:
===============
1. Input = array of strings
2. Output = a new array which is a sorted form of input array
3. Object to keep a counter of adjacent consonants in an element


ALGORITHM:
==========
1. Check if the elements of the array has a whitespace
    1.1 If yes, merge the words separated by whitespace in a new array
2. For the new array, create an object with each element as a key, set value as zeroMerge each of the values
3. Count adjacent consonants and update the values in the object
4. Sort the object by values
5. Create a new array consistenting of keys of the sorted object
*/

function sortStringsByConsonants(array) {
    let mergedArray = [];
    let objArray = {};
    const vowel = ["a", "e", "i", "o", "u"];
    
    //merging whitespaces in elements of the array//
    array.forEach(element => mergedArray.push(element.split(" ").join("")));
    
    // Creating object from an array //
    mergedArray.forEach(element => {
        objArray[element] = 0;
    });
    
    // Count the adjacent consonants //
    //==============================//
    mergedArray.map(element => {
        // check if the letter is a vowel
        // if not, check the next letter is a vowel
            // if not, they are adjacent consonants
            // go to the top of the loop
        // go to the next letter until loop count = length of word - 1
        
        for(let count = 0; count < element.length - 1; count++) {
            if(!vowel.includes(element[count]) && !vowel.includes(element[count+1])) {
                objArray[element] += 1;
            }
        }
    })
    
    // console.log(objArray);
    // console.log(Object.entries(objArray));
    
    // Sort object by its values//
    let sortedObjArray = Object.entries(objArray).sort((a,b) => b[1] - a[1]);
    // console.log(sortedObjArray);
    let sortedObj = Object.keys(sortedObjArray.reduce((r, [k, v]) => ({ ...r, [k]: v }), {}));
    console.log(sortedObj);
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']