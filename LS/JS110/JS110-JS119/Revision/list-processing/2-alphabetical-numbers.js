/*
given an array of numbers between 0 and 19, return an array of numbers in words sorted in alphabetical order

example
=======
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

ds:
==
input: array
output: array

other: object containing the numbers in words

algo:
====
1. Iterate over the elements of the input array and map it with the corresponding object property
2. While iterating, the elements should be coerced to String
3. Sort the mapped array in alphabetical order
*/

const NUMBERS_IN_WORDS = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
};

let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

function sortAlphabeticalNumbers(array) {
    let result = [];
    
    numbers.forEach(num => {
        result.push(NUMBERS_IN_WORDS[String(num)]);
        return result;
    })
    result.sort();
    return result;
}

console.log(sortAlphabeticalNumbers(numbers));