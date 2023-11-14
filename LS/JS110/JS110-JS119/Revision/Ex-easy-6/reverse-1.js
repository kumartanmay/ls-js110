/*
given a string, reverse the order of words in the string
Assume:
input will always be a string

example
=======
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

ds
==
input: string
output: string

other var
1. array to store the words

algo
====
1. Convert the string into an array of its words
2. Reverse the array and join it, delimited by whitespace
3. return the resulting string
*/

function reverse(sentence) {
    let words = sentence.split(" ");
    return words.reverse().join(" ");
}

console.log(reverse(""));
console.log(reverse("Hello World"));
console.log(reverse("Reverse these words"));