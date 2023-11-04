/*
PROBLEM
=======
Given a string, return an object containing the length of words and count of corresponding words.
Each word in a string consists of letters only.

EXAMPLE
=======
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2}
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
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
2. Remove non-letters from each element
    2.1 For each character in words, check whether it is [a-zA-Z]
    2.1 If it is not, remove it.
3. Initiate an empty object which will contain the result
4. Find the frequency of words based on the length, if it is not an empty string
    3.1 If the object already contains the length as a key, then increment it
    3.2 If not, then create a key and assign it number 1
    3.3 return the object
4. return an empty object in case of empty string
*/

function wordSizes(string) {
    let arrayOfWords = string.split(" ");
    let wordsWithLetters = [];
    let result = {};
    
    if (string){
        arrayOfWords.map((word, index) => {
            let newWord = '';
            word.split("").forEach(char => {
                if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
                    newWord += char;
                }
            })
            wordsWithLetters[index] = newWord;
            if(Object.keys(result).includes(String(newWord.length))) result[String(newWord.length)] += 1;
            else result[String(newWord.length)] = 1;
            return wordsWithLetters;
        })
        console.log(wordsWithLetters);
        return result;
    }
    
    return result;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));