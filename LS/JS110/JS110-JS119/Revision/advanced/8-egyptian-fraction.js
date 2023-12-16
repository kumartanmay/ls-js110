/*
egyptian fraction
=================
takes rational number as an argument and returns array of the denominators of unit fractions used for expressing the rational number.

example
=======
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

ds
==
input: two integers
output: array of integers

other vars
==========
function to return the value of the fraction
function to find the sum of unit fractions
constant to hold the value of the fraction

algo
====
1. Initiate an empty array that will hold the resulting integer values
2. Include the fraction.js library
3. Calculate the value of the fraction and assign it to a constant
4. find the sum of unit fractions in the resulting arrays until both are equal
    a. if the sum is greater than the constant, ignore the value, goto step 4
    b. if the sum is less than the constant, push it to the resulting array, goto step 4
5. return the resulting array

fractionValue
=============
input: object from the fraction.js library {s:, n:, d:,}
output: float integer


algo:
====
return the value of dividing the numerator key by the denomiator key

sumUnitFractions
================
input: array
output: float integer


unegyptian fraction
===================
takes the array of denominators of egyptian fraction, returns the rational number

example
=======
console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
*/

let Fraction = require('fraction.js');

// console.log("Calculation:", +new Fraction(5,7));

function egyptian(value) {
    /* 
    structure of object
    { 
        s: -1 or 1, // -1 for numbers less than zero
        n: integer, // numerator
        d: integer  // denominator
    }
    */
    
    let result = [];
    let i = 1;
    let sumUnitFraction = new Fraction(0, i); // initialised to zero
    
    while(Fraction(sumUnitFraction) - value !== 0) {
        // console.log("sumUF: ",sumUnitFraction);
        // console.log("value:", +value);
        // console.log("diff:", sumUnitFraction - value);
        result.push(i);
        sumUnitFraction = Fraction(sumUnitFraction) + new Fraction(1, result[result.length-1]);
        if(Fraction(sumUnitFraction) - value > 0) {
            sumUnitFraction = Fraction(sumUnitFraction) - new Fraction(1, result[result.length - 1]);
            result.pop();
        }
        i++;
        // console.log(result);
    }
    
    
    return result;
}

function unegyptian(array) {
    return array.reduce((sum, num) => sum + new Fraction(1, num), new Fraction(0));
}


// console.log(sumUnitFractions([2,5,70]));
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
console.log(egyptian(new Fraction(6, 7))); // 
console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
console.log(egyptian(new Fraction(5, 7)));
console.log(egyptian(new Fraction(127, 130)));