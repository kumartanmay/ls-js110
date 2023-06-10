/*
A collection of spelling blocks has two letters per block, as shown in this list:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters 
from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true 
if the word can be spelled using the set of blocks, false otherwise. 
You can consider the letters to be case-insensitive when you apply the rules.


PROBLEM:
Info:
    1. Thirteen blocks
    2. Only one letter can be used from a block
    3. Letters are case-insensitive
    4. Test whether the word can be formed using a letter from one of the blocks and return a boolean
Input: A nested array: each sub array consisting of blocks
Output: Boolean

Examples:
Butch: [BO, HU, GT, CP, HU] -> HU is repeating -> false
BATCH: [BO, NA, GT, CP, HU] -> No block is repeating -> true
jest: [JW, RE, FS, GT] -> No block is repeating -> true

Mental model:
1. For each char in the word, find the block which has the char. Place the index of the block in an array
2. If any of the elements of the array is repeating, return false.

Data Structure:
Input: Nested array
Output: Boolean

Algo:
1. Create a nested array of block of elements: each subarray is a block
2. Iterate over each char of the word, over the elements of the subarray.
3. If the char matches with an element in the subarray, push its index to the result array
4. If any index in the resulting array repeats, return false. Else return true.
*/

function isBlockWord(word) {
    let BLOCK = [['B','O'],['X','K'],['D','Q'],['C','P'],['N','A'],['G','T'],['R','E'],['F','S'],['J','W'],['H','U'],['V','I'],['L','Y'],['Z','M']];
    let result = [];

    word.split('').forEach(element => {
        BLOCK.map((subarray, index) => {
            for(let i = 0; i < 2; i++) {
                if (element.toUpperCase() === subarray[i]) return result.push(index);
            }
        })  
    });

    console.log(!findRepeatIndex(result));
}
/*

*/
function findRepeatIndex(array) {
    array.sort();
    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if (array[i] === array[j]) return true;
        }
    }
    return false;
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

// console.log(findRepeatIndex([ 0, 9, 5, 3 ]));