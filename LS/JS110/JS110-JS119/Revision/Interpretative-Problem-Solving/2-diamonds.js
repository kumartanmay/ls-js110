/*
given an odd number, create a n x n cornered diamond.
assumption: input will always be an odd number

ex
==
diamond(1)
*

diamond(3)
 *
***
 *
 
diamond(5)
  *
 ***
*****
 ***
  *
  
diamond(9)
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    
ds
==
input: number
output: string consisting of whitespaces and stars

other vars
function to create a string of stars and whitespaces
----------------------------------------------------
given the total rows and row number, return array of * and whitespaces in a row
row number is always less than or equal to the total rows
total rows is always an odd number

ex
--
starsAndWhiteSpaces(5,1)
stars = 1
ws = 4
[' '," ", "*", " ", ' ']

starsAndWhiteSpaces(5,2)
stars = 3
ws = 2
[' ','*', '*', '*', ' ']

starsAndWhiteSpaces(5,3)
stars = 5
ws = 0
['*','*','*', '*', '*']

starsAndWhiteSpaces(5,4)
stars = 3
ws = 2

starsAndWhiteSpaces(5,5)
stars = 1
ws = 4

ds:
input: number
output: array

an array of whitespaces and *

algo
----
1. each array has elements = number of rows
2. sum of stars and ws = number of rows
3. count of stars = 2n - 1 when row is less than half of count of rows
4. reverse the count of rows after mid point, 
5. return the array after joining with whitespace

algo
====
1. Each row is a string of length = given count
2. Total rows is same as the given count
3. repeat the stars and whitespaces until the given count
*/

function diamond(totalRows) {
    for (let row = 1; row <= totalRows; row++) {
        starsAndWhiteSpaces(totalRows, row);
    }
}


// returns stars and whitespaces in a row
function starsAndWhiteSpaces(totalRows, row) {
    let stars = '*';
    let whitespaces = ' ';
    let theRow = []
    
    let midRow = Math.floor(totalRows/2) + 1;
    let totalStars = 0;
    let totalWhiteSpaces = 0;
    /*
    if(row <= midRow) {
        //add stars in increasing order
        totalStars = 2*row - 1;
        // totalWhiteSpaces = totalRows - totalStars;
        for(let i = 0; i < totalStars; i++) {
            theRow.push(stars);
        }
        for(let i = 0; i < totalWhiteSpaces; i++) {
            theRow.push(whitespaces);
        }
        theRow = theRow.splice(theRow.indexOf(whitespaces), totalWhiteSpaces / 2).concat(theRow);
    }
    */
    if(row > midRow) {
        // add stars in decreasing order
        let distanceFromBottom = totalRows - row;
        let mimedRow = distanceFromBottom + 1;
        row = mimedRow;
        /*
        let totalWhiteSpaces = totalRows - totalStars;
        for(let i = 0; i < totalStars; i++) {
            theRow.push(stars);
        }
        for(let i = 0; i < totalWhiteSpaces; i++) {
            theRow.push(whitespaces);
        }
        theRow = theRow.splice(theRow.indexOf(whitespaces), totalWhiteSpaces / 2).concat(theRow);
        */
    }
    
    totalStars = 2*row - 1;
    totalWhiteSpaces = totalRows - totalStars;
    
    for(let i = 0; i < totalStars; i++) {
            theRow.push(stars);
        }
    for(let i = 0; i < totalWhiteSpaces; i++) {
        theRow.push(whitespaces);
    }
    theRow = theRow.splice(theRow.indexOf(whitespaces), totalWhiteSpaces / 2).concat(theRow);
    
    console.log(theRow.join(''));
}

diamond(15);