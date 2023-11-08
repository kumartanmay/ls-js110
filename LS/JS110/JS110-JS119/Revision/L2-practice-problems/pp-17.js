/*
a function returns a 32-char hexa number in combination of 8-4-4-4-12 digits.

example
=======
`f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91`

ds
==
variables to store a number
variables to store the hexa-equivalent of the decimal number
Input: None
Outout: String

algo
====
1. randomly generate a 8-digit, four 4-digits and a 12-digit number
2. convert each of them into hexa equivalent
3. combine all the numbers in the desired format
*/

function generateUUID() {
    let firstEight = generateRandomNumber(8);
    let fours = "";
    
    for(let counter = 0; counter < 4; counter++) {
        fours = fours + generateRandomNumber(4) + '-';
    }
    
    let twelves = generateRandomNumber(12);
    
    return firstEight + '-' + fours + twelves;
}

function generateRandomNumber(digits) {
    let hexa = '';
    const HEXADIGITS = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: "a",
        11: "b",
        12: "c",
        13: 'd',
        14: 'e',
        15: 'f'
    }
    
    for (let counter = 0; counter < digits; counter++) {
        let decimal = String(Math.floor(Math.random()*16));
        hexa += HEXADIGITS[decimal];
    }
    
    return hexa;
}

console.log(generateUUID());