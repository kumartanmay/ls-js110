/* 
Given a string, count the chars in uppercase, lowercase and others. Return the values in an object.

ex:
==
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

ds:
==
input: string
output: object

other vars
function to return alphabets

algo
====
1. separate the alphabets from the rest of the string.
2. Count the length of the rest of the string and assign the value to neither in the object
3. From the alphabets find the lowercase and uppercase chars
*/

function letterCaseCount(string) {
    let [alphabetsInString, nonAlphabetsInString] = separateAlphabetsAndNonAlphabets(string);
    let result = {};
    
    result['neither'] = nonAlphabetsInString.length;
    result['lowercase'] = 0;
    result['uppercase'] = 0;
    
    for(let idx = 0; idx < alphabetsInString.length; idx++) {
        if (alphabetsInString[idx] === alphabetsInString[idx].toLowerCase()) result['lowercase'] += 1;
        else result['uppercase'] += 1;
    }
    
    return result;
}

function separateAlphabetsAndNonAlphabets(string) {
    let alphabets = '';
    let nonAlphabets = '';
    for (let idx = 0; idx < string.length; idx++) {
        if(string[idx] >= 'A' && string[idx] <= 'z') alphabets += string[idx]
        else nonAlphabets += string[idx]
    }
    return [alphabets, nonAlphabets];
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }