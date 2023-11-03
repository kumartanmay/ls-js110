/*
PROBLEM
=======
Given a string, return an object containing the length of words and count of corresponding words.
Each word in a string consists of non-whitespace characters.

EXAMPLE
=======
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

DATA STRUCTURE:
===============
Input: String
Output: Object

Intermediate variables
An array containing the words of the string
An array containing the length of corresponding words

ALGO:
====
1. Split the string into it an array of words
2. Initiate an empty object which will contain the result
3. Find the frequency of words based on the length, if it is not an empty string
    3.1 If the object already contains the length as a key, then increment it
    3.2 If not, then create a key and assign it number 1
    3.3 return the object
4. return an empty object in case of empty string
*/

function wordSizes(string) {
    let arrayOfWords = string.split(" ");
    let result = {};
    
    if (string){
        arrayOfWords.forEach(word => {
        if(Object.keys(result).includes(String(word.length))) result[String(word.length)] += 1;
        else result[String(word.length)] = 1;
        })
    }
    
    return result;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));