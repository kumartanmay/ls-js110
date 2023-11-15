/*
given a sentence consisting of one or more words, reverse words greater than 5 or more chars

assume: input is always a string

example
======
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

ds
==
input: string
output: a new string

other variables
an array to perform operations on the input string

algo:
====
1. convert the input string into an array with one element only
2. reverse the element of the array
3. join the mutated array
*/

function reverseWords(sentence) {
    let sentenceArray = sentence.split(" ");
    let output = sentenceArray.map(elem => {
        if (elem.length > 4) {
            let revWord = elem.split("").reverse();
            return revWord.join("");
        } else return elem;
    })
    
    return output.join(" ");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"