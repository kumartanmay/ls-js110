/*
PROBLEM
=======

Obj
---
We have to determine the left over blocks after creating the tallest structure with the given blocks.
The structure is created according to the following rules:

1. The structure consists of blocks
2. The topmost layer has a single block
3. Each block is supported by four blocks beneath it
4. A block in the bottom layer can support more than one block in the top layer
5. There are no gaps between blocks

Input: Number of blocks
Output: Number of blocks

Implicit rule:
1. Each cube is supported by four cubes beneath it in 2x2 structure
2. Second layer and beyond will contain at least four cubes
3. Second layer has exactly four cubes (2x2)
4. Third layer has exactly nine cubes (3x3)
5. Fourth layer has exactly sixteen cubes (4x4)
6. Layer number contains cubes exactly equal to the square of the layer number

EXAMPLES
========

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

Can we add more blocks to the second layer? e.g. If there are six blocks, can we add five to the second layer? 
In such a scenarios, there would be no blocks left over. But the test case, says it should have one block left over.
So cannot add unnecessary blocks to any layer which does not support a block above it. 

DATA STRUCTURES
===============

1. Number of blocks in each layer can be represented by an array. e.g. [1,4,9,16,...]
2. A variable to store the sum of blocks used after forming each layer.
3. A variable to determine whether a layer can be formed with the left over blocks

ALGORITHM
=========
1. Input = number of blocks provided
2. Provided number the number of blocks provided is greater than zero:
    2.1. Run a loop to find the sum of squares until the left over is less than the square of the layer number
    2.2. Push the count of blocks in each layer in the array. The sum of elements in the array is the blocks used
    2.3. leftover is difference between count of blocks provided and the sum of elements in the array
3. Else, it is zero.
*/

function calculateLeftoverBlocks(countOfBlocks) {
    let blocksInEachLayer = [];
    let layers = 1;
    let sumOfCubes = 1;
    let leftover = countOfBlocks;
    
    while(countOfBlocks > 0) {
        while(leftover >= layers*layers) {
            blocksInEachLayer.push(layers*layers);
            sumOfCubes = blocksInEachLayer.reduce((a,b) => a+b);
            leftover = countOfBlocks - sumOfCubes;
            layers++;
        }
        // console.log(leftover);
        return leftover;
    }
    return 0;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true