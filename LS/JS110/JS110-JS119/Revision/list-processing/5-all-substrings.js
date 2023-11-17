/*
given a string, return a list of all substrings.
all substrings that start with index 0 should come first and so on.

example
=======
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  
ds
==
input: string
output: an array

algo:
====
1. at each iteration of the string, call the leading substring function
2. append the return value to the resulting function
*/

function leadingSubstrings(string) {
    let result = [];
    let arrString = string.split("");
    
    result = arrString.map((char,index) => string.slice(0,index+1));
    /*
    for(let i = string.length; i > 0; i--) {
        result.push(string.slice(0,i));
    }*/
    
    return result.sort((a,b) => a.length - b.length);
}

function substrings(string) {
    let result = [];
    let strArr = string.split("")
    strArr.forEach((char, index) => result.push(leadingSubstrings(string.slice(index,string.length))))
    return result;
}

console.log(substrings("xyz"));
console.log(substrings("abcde"));