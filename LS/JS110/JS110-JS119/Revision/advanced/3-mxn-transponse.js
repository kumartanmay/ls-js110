/*
write a program to transponse a mxn matrix.

ex
==
const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

ds:
===
input = a nested array => m elements which is an array of n elements
algo: = a new nested array => n elements which is an array of m elements

algo:
====
1. initiate an empty array which will hold the result
2. find the count of rows and cols
3. Iterate over the outer elements, cols times
4. Initiate a nested array
5. Then within this iteration, loop over the inner elements, rows times
6. assign the element to the mth row and nth col of the result
7. Return the result
*/

function transpose(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];
    
    for (let i = 0; i < cols; i++) {
        transposed.push([]);
        for (let j = 0; j <  rows; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    
    return transposed;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]