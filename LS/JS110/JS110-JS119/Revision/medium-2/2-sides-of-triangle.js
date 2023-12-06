/*
given three values as lengths of sides of a triangle, return whether the triangle is equilateral, isosceles, scalene or invalid

valid triangle: 
1. sum of two shorter sides must be greater than the third
2. every side > 0


equilateral: all three sides are equal
isosceles: two sides are equal
scalene: none of the sides are equal

ds
==
input: three numbers
output: string

other vars
function to determine valid triangle
function to determine equilateral triangle
function to determine isosceles triangle
function to determine scalene triangle

algo:
1. check the validty of triangle
    a. all sides are greater than zero, 
        1. find the largest number
        2. largest number must be smaller than the sum of the other two, return invalid
    b. else return invalid
2. equilateral triangle: all sides are equal
3. isoscele: two sides are equal
4. scalene: if neither equilateral nor isosceles
*/

function validTriangle(side1, side2, side3) {
    if(side1 > 0 && side2 > 0 && side3 >0) {
        let largestSide = Math.max(side1, side2, side3);
        let smallestSide = Math.min(side1, side2, side3);
        let secondSmallest = side1 + side2+ side3 - smallestSide - largestSide
        
        if(largestSide < (secondSmallest + smallestSide)) return true;
        else return false;
    }
    else return false;
}

function equilateral(side1, side2, side3) {
    let largestSide = Math.max(side1, side2, side3);
    let smallestSide = Math.min(side1, side2, side3);
    if(largestSide === smallestSide) return true;
    else return false;
}

function isosceles(side1, side2, side3) {
    let largestSide = Math.max(side1, side2, side3);
    let smallestSide = Math.min(side1, side2, side3);
    let secondSmallest = side1 + side2 + side3 - largestSide - smallestSide;
    
    return largestSide === secondSmallest;
}

function triangle (side1, side2, side3) {
    if (validTriangle(side1, side2, side3)) {
        if (equilateral(side1, side2, side3)) return "Equilateral";
        else if (isosceles(side1, side2, side3)) return "Isosceles";
        else return "Scalene";
    }
    return "Invalid";
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"