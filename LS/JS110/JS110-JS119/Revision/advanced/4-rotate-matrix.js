/*
let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

[
[3, 4, 1],
[9, 7, 5],
[6, 2, 8]
]

t[0][0] = m[2][0] 
t[0][1] = m[1][0]
t[0][2] = m[0][0]
t[1][0] = m[2][1]
t[1][1] = m[1][1]
t[1][2] = m[0][1]
t[2][0] = m[2][2]
t[2][1] = m[1][2]
t[2][2] = m[0][2]
-----
[
[3, 7, 4, 2],
[5, 1, 0, 8]
]

[
[5, 3],
[1, 7],
[0, 4],
[8, 2]
]

r[0][0] = m[1][0] 
r[0][1] = m[0][0]
r[1][0] = m[1][1]
r[1][1] = m[0][1]
r[2][0] = m[1][2]
r[2][1] = m[0][2]
r[3][0] = m[1][3]
r[3][1] = m[0][3]
algo:
=====
0. intiate an empty array
1. # rows of matrix = # cols of transposed
2. # cols of matrix = # rows of transposed
3. iterate over the outer elements of the matrix
4. iterate over the inner elements of the matrix from the right
5. push the right most element of the matrix to the mth row of the result
6. return result
*/

function rotate90(matrix) {
    let rows = matrix[0].length;
    let cols = matrix.length;
    let rotated = [];
    
    // for(let i = 0; i < rows; i++) {
        // rotated.push([]);
    // }
    // console.log(`Rows: ${rows}`);
    // console.log(`Cols: ${cols}`);
    for(let i = 0; i < rows; i++) {
      rotated.push([]);
      for (let j = 0 ; j < cols; j++) {
          console.log(i, j);
          rotated[i][j] = matrix[j][i];
      }
      rotated[i].reverse();
    }
    return rotated;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

// let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
// let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]