/*
Given a string, find all palindromes in the substrings. Palindromes are case sensitive. 
all substrings are at least two characters long.

example:
========
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

ds
==
input: string
output: an array

other variables
an array to store all the substrings

algo
====
1. find all substrings
2. check whether the substring is a palindrome
3. push all the palindrome substrings into an array
*/

function palindromes(string) {
    let substringArray = substrings(string);
    // console.log(substringArray); // returns a nested array
    let result = [];
    
    substringArray.forEach(sub => {
        // console.log(sub);
        sub.forEach(elem => {
            if (elem.length>1 && isPalindrome(elem)) {
                // console.log(elem);
                // console.log(isPalindrome(elem));
                result.push(elem);
            }
        });
    });
    
    return result;
}

function isPalindrome(string) {
    let stringArray = string.split("");
    // let reverseArray = stringArray.reverse();
    // reverse is a destructive method, so it is reversing it twice
    let reverseArray = [...stringArray].reverse();
    // console.log("str:", stringArray);
    // console.log("rev:", reverseArray);
    return stringArray.every((str, index) => str === reverseArray[index]);
}


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

console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));