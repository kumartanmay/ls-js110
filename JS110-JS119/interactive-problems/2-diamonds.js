/*
Write a function that displays a four-pointed diamond in an nxn grid, 
where n is an odd integer supplied as an argument to the function. 
You may assume that the argument will always be an odd integer.

PROBLEM:
========
1. Input: Number
2. Output: String

Info:
1. Input is always an odd number
2. Output is a combination of whitespaces and *.
3. The length of each string is same as the input string
4. The string is spread accross same count of lines as the input string.
5. Total number of rows is same as count

Example:
========
diamond(9);
// logs
    *               // row = 1, stars = 1, star[startPos] = 4
   ***              // row = 2, stars = 3, star[startPos] = 3
  *****             // row = 3, stars = 5, star[startPos] = 2
 *******            // row = 4, stars = 7, star[startPos] = 1
*********           // row = 5, stars = 9, star[startPos] = 0
 *******            // row = 6, stars = 7, star[startPos] = 1
  *****             // row = 7, stars = 5, star[startPos] = 2
   ***              // row = 8, stars = 3, star[startPos] = 3
    *               // row = 9, stars = 1, star[startPos] = 4

diamond(3);
// logs             
 *                  // row = 1, stars = 1, star[startPos] = 1
***                 // row = 2, stars = 3, star[startPos] = 0
 *                  // row = 3, stars = 1, star[startPos] = 1

Mental model:
0. Each row is a combination of whitespace and stars and length = count
1. First and last line of the string has one * in the middle and surrounded by (n-1)/2 whitespaces on each side
2. The middle line of the output string has all *s in it
3. Each line after first increases the count of *s by 2 until the max count is reached, then decreases by same count until the count is 1

Data Structure:
1. Input: Number
2. Output: String

Algorithm:
1. Consider diamond a structure of whitespaces and stars (*)
2. Each row has 2n-1 stars, where n is count of rows, until we reach the mid row. mid row = (count - 1) / 2
    2.1 Each row increments the count of stars by until it reaches the mid row
3. Second half is mirror image of the first half, elements in the second half repeat in a reverse order of the first.
Code:
*/

function diamond(count) {
    let diamonds = [];
    // diamonds.length = count;
    let mid  = (count - 1) / 2;
    // let firstHalf = [];

    // diamonds.map((_, index) => {return diamonds[index] = " "});

    initiliase(diamonds, count);
    /* for (let i = 0; i < count; i++) {
        diamonds[i] = ' ';
    }*/ 

    // console.log(diamonds);
    let startPos = mid;

    for (let rows = 1; rows <= (mid + 1); rows++) {
        // firstHalf = [];
        if (countStars(diamonds) === (2 * rows - 1)) continue;
        // console.log(diamonds);
        for(let i = 0; i < (2 * rows - 1); i ++) {
            // if (countStars(diamonds) === rows) continue;
            // firstHalf[i] = '*';
            diamonds[startPos+i] = '*';
            // console.log(diamonds);
        }
        startPos = startPos - 1;
        // let secondHalf = [...diamonds];
        // secondHalf.reverse().shift();
        // console.log(secondHalf);
        // console.log(diamonds.length);
        console.log(diamonds.join(""));
        // console.log(diamonds.concat(secondHalf).join(""));
    }

    // console.log(diamonds);
    startPos = 1;

    /*
    for (let i = 0; i < count; i++) {
        diamonds[i] = ' ';
    }
    */

    for (let rows = mid; rows > 0; rows--) {
        if(countStars(diamonds) === (2*rows- 1)) continue;
        // console.log(diamonds);

        initiliase(diamonds, count);

        //stars(diamonds, rows, startPos);
        
        for(let i = 0; i < (2*rows -1); i++) {
            // console.log(startPos);
            diamonds[startPos + i] = '*';
        }
        
        startPos = startPos + 1;
        console.log(diamonds.join(""));
    }
    

}

function countStars(array) {
    let count = 0;
    array.forEach(element => {
        if(element === '*') count++;
    });
    return count;
}

function initiliase(array, count) {
    for(let i = 0; i < count; i++) {
        array[i] = ' ';
    }

    return array;
}

diamond(7);