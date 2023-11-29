/*
give a string, return true only if all the chars are uppercase.
Ignore the non-alphabetic chars

ex:
==
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

ds
==
Input: string
Output: boolean

algo
====
0. Assign a default value of true to result
1. Iterate through each character of the string
2. If the char is not an alphabet, continue with the next character
3. If any alphabet is in lower case return false as result
4. else return result
*/

function isUppercase(str) {
    let result = true;
    
    for(let idx = 0; idx < str.length; idx += 1) {
        if(str[idx] >= 'A' && str[idx] <= 'z') {
            // console.log(str[idx]);
            if(str[idx].toUpperCase() === str[idx] ) {
                // console.log(str[idx]);
                continue;
            } else return false;
        }
    }
    return result;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true