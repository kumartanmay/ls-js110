/*
Given a string, return a boolean if the string can be formed from the block of letters according to the rule.
Each block consists of two letters only.
A letter from the block can be used only once. The next letter from the block cannot be used.
letters in the string are case-insensitive

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

ex
==
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

ds
==
input: string
output: boolean

other variables
an array containing the blocks as nested elements
function to find the block of elements
function to splice the block of elements and concatenate

algo
====
1. Define the block
2. Convert all the letters in the string to the same case as in the block
3. For each letter in the string determine the block of letters (check inclusion)
4. If it is found, remove the block
    a. splice the array until the block
5. If any letter does not find its corresponding block, return false
6. Else, return true
*/

function isBlockWord(string) {
    let block = [['a','n'],['b','o'],['c','p'],['d','q'],['e','r'],['f','s'],['g','t'],['h','u'],['i','v'],['j','w'],['k','x'],['l','y'],['m','z']];
    string = string.toLowerCase();
    let stringArray = string.split('');
    let indexBlock = [];
    
    for(let i = 0; i < stringArray.length; i++) {
        indexBlock.push(findBlock(block,stringArray[i]));
        // console.log(stringArray[i]);
        console.log(indexBlock);
        block.splice(indexBlock[indexBlock.length-1],1);
        // console.log(block);
    }
    
    return Number.isInteger(indexBlock.reduce((a,b) => a && b));
}

function findBlock(block, char){
    // return the index of the block
    for(let i = 0; i < block.length; i++) {
        if(block[i].includes(char)) return i;
    }
    return false;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUHTC'));
console.log(isBlockWord('jest'));