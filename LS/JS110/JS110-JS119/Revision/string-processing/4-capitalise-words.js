/*
given a string, capitalise each word in the string.
each is a sequence of non-whitespace chars.

ex
==
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

ds
==
input: string
output: another string

other vars:
an array to split the string and perform operations on each word

algo
====
1. split the string by whitespace chars
2. Capitalise the first char of each element of the string
3. join the elements of the array by whitespace char
*/

function wordCap(string) {
    let arrString = string.split(" ");
    
    return arrString.map(word => word[0].toUpperCase() + word.slice(1,word.length)).join(" ");
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'