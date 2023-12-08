/*
given a 3 x 3 matrix in the form of a nested array
Nested array is an array of arrays, three subarrays (as rows) each sub array contains three elements.

return a new array with elements of rows in the column and vice versa.

ex
==
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

ds
==
input: a nested 2-d array
output: another nested 2-d array

other vars

algo:
=====
1. create an empty array which will store the result
2. determine the rows in the input array. col will be same as row
2. iterate on each element of the input array
3. use array destructuring to swap positions of elements
*/

function transpose(matrix) {
    let result = [];
    let rows = matrix.length;
    let cols = rows;
    
    for(let rowCount = 0; rowCount < rows; rowCount++) {
        result.push([]);
        for (let colCount = 0; colCount < cols; colCount++) {
            // console.log(matrix[colCount][rowCount]);
            // console.log(result[rowCount][colCount]);
            result[rowCount][colCount] = matrix[colCount][rowCount];
        }
    }
    
    return result;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]