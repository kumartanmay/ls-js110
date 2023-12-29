/*
Given an odd number greater than or equal to 7, create a 8-pointed star in n x n grid.

ex
==
stars(7)
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

stars(9)
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

ds:
==
input: integer
output: string

other variables:
starsInRow(row, grid): a function to determine the combination of stars & whitespace in each row
----------------------
each row has three stars
each row has a length of the grid
rest of the chars in the row are whitespaces
position of first star in each row depends on the grid value and row number

white spaces between stars in a row
row = 0, stars position = 0
whitespaces between stars = (grid - 3)/ 2 - row

row = 1, stars position = 1
whitespaces between stars = whitespaces in previous step - 1;

until the row < mid of grid
algo:
=====
1. if row is mid, then repeat the stars (grid value of times)
2. if row is less than half of grid, find the starsInRow(row, grid)
3. if row is more than half of grid, then
    a. row = distance from the bottom + 1
    b. call the starsInRow(row, grid)

*/

const STAR = '*';
const SPACE = ' ';

function stars(grid) {
    let midRow = Math.floor(grid/2);
    let row = 0;
    let result = '';
    
    for(row = 0; row < midRow; row++) {
        console.log(result.concat(starsInRow(row, grid)));
    }
    
    if (row === midRow) {
        console.log(result.concat(STAR.repeat(grid)));
        row++;
    }
    
    while(row < grid) {
        let mimedRow = grid - row - 1;
        console.log(result.concat(starsInRow(mimedRow, grid)));
        row++;
    }
    
}

function starsInRow(row, grid) {
    let starsAndSpaces = [];
    let whiteSpaces = (grid - 3)/ 2 - row; // whitespaces in first row

    for(let i = 0; i < row; i++) {
        starsAndSpaces.push(SPACE);
    }
    starsAndSpaces[row] = STAR;
    pushSpace(whiteSpaces, starsAndSpaces);
    starsAndSpaces.push(STAR);
    pushSpace(whiteSpaces, starsAndSpaces);
    starsAndSpaces.push(STAR);
    
    return starsAndSpaces.join("");
}

function pushSpace(whiteSpaces, starsAndSpaces) {
    for(let i = 0; i < whiteSpaces; i++) {
        starsAndSpaces.push(SPACE)
    }
    return starsAndSpaces;
}
stars(11);