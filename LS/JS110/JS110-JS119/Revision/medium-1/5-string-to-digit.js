/*
given a string, find the numbers in it and return the corresponding digits.
assume, all the words are limited by whitespace
assume, no two numbers are concatenated in the string
assume, all the numbers in the string are between 0-9

ex
==
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

ds
==
Input: string
Output: string

other vars
a constant object to store the words and corresponding digit
an array consisting of words int the string

algo
====
1. Split the string into a list of words
2. iterate through list words and see if it is in the keys of the object
3. if yes, replace the element in the array with the corresponding value
4. Join the array into a string
*/

const DIGITS = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'zero': 0
}

function wordToDigit(string) {
    let words = string.split(". ").join(" ").split(" ");
    console.log(words);
    words.forEach((word,index) => {
        if(Object.keys(DIGITS).includes(word)) words[index] = DIGITS[word];
    })
    
    return words.join(" ");
    
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."