/*
PROBLEM:
=======
Return a boolean value whether the string passed is Palindrom.

The case matters. 

EXAMPLE:
========
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

DATA STRUCTURE
==============
Input: String
Output: Boolean

Intermediate:
Reversed string

ALGO
====
1. Store the reversed value of the string in a new variable
    1.1 Split the string into an array of characters
    1.2 Reverse the array and join the string
2. Compare each character of reversed string with the corresponding character in the input string
3. If there is no mismatch, return it is a palindrome.
4. Else, it is not a palindrome.
*/

function isPalindrome(string) {
    let stringAlphaNum = string.replace(/[^a-zA-Z0-9]/g, "");
    let stringArray = stringAlphaNum.split("");
    // console.log(stringArray);
    let reversed = [...stringArray].reverse(); // reverse is a destructive process
    let result = '';
    
    stringArray.forEach((char,index) => {
        if(reversed[index].toLowerCase() !== char.toLowerCase()) {
            result = false;
        }
    })
    /*
    for(let index = 0; index < stringArray.length; index++) {
        console.log(`Reversed ${index}: ${reversed[index]}`);
        console.log(`String ${index}: ${stringArray[index]}`);
        if(reversed[index] !== stringArray[index]) return false;
    }*/
    
    //return true;
    
    if (result === '') {
        return true;
    }
    
    return result;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome("356653"));
console.log(isPalindrome("356a653"));
console.log(isPalindrome("123ab321"));