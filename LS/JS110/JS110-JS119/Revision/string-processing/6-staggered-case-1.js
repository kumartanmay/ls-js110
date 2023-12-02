/*
Given a string, alter the case of letters based on its position. 
Alternate characters should be caps. Count the non-alphabetic characters too
but do not ignore them.

ex:
==
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

ds
==
Input: string
Output: string

algo:
====
1. Declare an empty string which will hold the desired string
2. Iterate through each char of the string
    2.1 if the char is alphabet & index is odd, the case will be lower & concatenated with the new string
    2.2. if the char is alphabet & index is even, the case will be upper & concatenated with the new string
3. Return the new string
*/

function staggeredCase(string) {
    let result = '';
    
    for (let idx = 0; idx < string.length; idx++) {
        if(idx % 2 === 0 && string[idx] >= 'A' && string[idx] <= 'z') result += string[idx].toUpperCase();
        else if (idx % 2 === 1 && string[idx] >= 'A' && string[idx] <= 'z') result += string[idx].toLowerCase();
        else result += string[idx];
    }
    
    console.log(result);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"