/*
given string, convert the lower case letters in a string to uppercase
and lowercase letters to uppercase. Leave other characters as it is.

ex
===
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

ds
==
input: string
output: new string

algo
====
1. Iterate through each char of the string
2. if the char is lowercase, change it to uppercase and concatenate it to a new string
3. if char is uppercase, change it to lowercase and concatenate it the new string
4. if char is neither, concatenate it to the new string
5. return the new string at the end of iteration
*/

function swapCase(string) {
    let result = '';
    
    for(let idx = 0; idx < string.length; idx++) {
        if(string[idx] >= 'A' && string[idx] <='Z') result += string[idx].toLowerCase();
        else if (string[idx] >= 'a' && string[idx] <= 'z') result += string[idx].toUpperCase();
        else result += string[idx];
    }
    
    console.log(result);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"