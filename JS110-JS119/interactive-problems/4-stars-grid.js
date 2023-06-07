/*
Write a function that displays an 8-pointed star in an NxN grid, 
where N is an odd integer that is supplied as an argument to the function. 

The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

PROBLEM:
1. Number of stars in all the rows is three, except the middle
2. Number of stars in the mid is same as count
3. Number of rows is same as count
4. Count will always be an odd number greater than 7

DATA STRUCTURE:
Input: Number
Output: String

Algo:
If the row < middle row:
    Index of starting position of star = row -1; 
    Number of whitespaces between stars in a row = MIDROW - row - 1
If the row > middle row, reset row = mid - 1
    Index of starting position of star = row - 1
    Number of whitespaces between stars in a row = MIDROW - row - 1
    Decrement the row by 1 until row is greater than zero;

*/

function stars(count) {
    const MIDROW = Math.ceil(count / 2);
    // console.log(MIDROW);

    for(let row = 1; row < MIDROW; row++) {
        // console.log(`${' '.repeat(row -1)}*${' '.repeat(Math.floor(count / 3) - (row -1))}*${' '.repeat(Math.floor(count / 3) - (row -1))}*${' '.repeat(row -1)}`);
        console.log(`${' '.repeat(row -1)}*${' '.repeat(MIDROW - (row + 1))}*${' '.repeat(MIDROW - (row + 1))}*${' '.repeat(row -1)}`);
    }
    console.log(`${'*'.repeat(count)}`);

    for(let row = MIDROW - 1; row > 0; row--) {
        // console.log(`${' '.repeat(row -1)}*${' '.repeat(Math.floor(count / 3) - (row -1))}*${' '.repeat(Math.floor(count / 3) - (row -1))}*${' '.repeat(row -1)}`);
        console.log(`${' '.repeat(row -1)}*${' '.repeat(MIDROW - (row + 1))}*${' '.repeat(MIDROW - (row + 1))}*${' '.repeat(row -1)}`);
    }
}

stars(7);
stars(9);
stars(11);
stars(13);