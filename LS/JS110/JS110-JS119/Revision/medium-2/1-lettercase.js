/*
given a string, return the percentage of characters that are lowercase, uppercase and neither.

ex
==
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

ds
==
input: string
output: object {uppercase: num, lowercase: num, neither: num}

length of string
num of uppercase
num of lowercase

algo
====
1. store the length of the string in a variable
2. function to determine the lowercase
3. function to determine uppercase
4. iterate over each char and determine the case of the letters and add to corresponding properties in an object
5. return the object at the end of iteration
*/

function lowercase(char) {
    return char === char.toLowerCase();
}

function uppercase(char) {
    return char === char.toUpperCase();
}

function letterPercentages(string) {
    let stringLength = string.length;
    let lowercaseLetters = 0;
    let uppercaseLetters = 0;
    let neitherCase = 0;
    
    string.split("").forEach(char => {
        // since it is a string, all the non-alpha are also string chars
        // hence lowercase() always returns true for non-alpha
        /*
        if (lowercase(char)) {
            console.log(char);
            lowercaseLetters++;
        }
        */
        if (char >= "A" && char <= 'z') {
            if(uppercase(char)) uppercaseLetters++;
            if(lowercase(char)) lowercaseLetters++;
        }
        else neitherCase++;
    })
    
    let result = {
        lowercase: lowercaseLetters/stringLength * 100,
        uppercase: uppercaseLetters/stringLength * 100,
        neither: neitherCase/stringLength * 100
    }
    
    console.log(result);
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }