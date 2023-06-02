/*
Write two functions: one that takes a Rational number as an argument, 
and returns an Array of the denominators that are part of an Egyptian Fraction representation of the number, 
and another that takes an Array of numbers in the same format, and calculates the resulting Rational number.

PROBLEM:
Input: Two numbers - num, den
Output: Numbers - denominators of egyptian fraction

Info / Rules:
1. Egyptian Fraction is when a rational number can be expressed as a sum of unit fractions
2. A unit fraction is a rational number with numerator = 1
3. The function takes numerator and denominator as inputs and returns the denominators of unit fractions comprising the sum
4. Assume both the input values will be whole numbers only and second parameter will not be zero
5. If the first parameter is zero, return zero.


EXAMPLE:
console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

Data structure:
Inputs is an object {s: , n: , d: }
Output is an array

ALGO:
0. Initialise an empty array which will hold the result
1. Convert the rational number object into a number to perform mathematical and logical operations
2. Initialise a unit fraction, viz. 1/1
3. Initialise a variable holding sum of unit fractions // 1 + 1/2 + 1/3 + ...
4. Compare the sum of unit fractions with rational number
    4.1 If it is equal, push the denominator of unit fraction and return result
    4.2 If sum < rational number, push the denominator of unit fraction; increase the denominator and add the new unit fraction to sum; go to step 4
    4.3 If sum > rational number, subtract the unit fraction from sum; increase the denominator and add the new unit fraction to sum; go to step 4


*/

let Fraction = require('fraction.js');

function egyptian(fractionObject) {
    let result = [];
    // console.log(Number(fractionObject)); // returns the floating result of n/d
    let unitFraction = new Fraction(1, 1);
    let sumUnitFractions = new Fraction(1,1);
    
    while (true) {
        if (Number(fractionObject) === Number(sumUnitFractions)) {
            result.push(unitFraction.d);
            return result;
        }
        // unitFraction.d += 1;
        // sumUnitFractions = sumUnitFractions.add(unitFraction);
        // console.log(sumUnitFractions);
        if (Number(fractionObject) > Number(sumUnitFractions)) {
            // console.log(Number(sumUnitFractions));
            result.push(unitFraction.d);
            // unitFraction.d += 1;
            // sumUnitFractions = sumUnitFractions.add(unitFraction);
            // console.log(unitFraction);
            // console.log(result);
            // console.log(Number(sumUnitFractions));
        } else {
            sumUnitFractions = sumUnitFractions.sub(unitFraction);
            // unitFraction.d += 1;
            // sumUnitFractions = sumUnitFractions.add(unitFraction);
        }
        unitFraction.d += 1;
        sumUnitFractions = sumUnitFractions.add(unitFraction);
    }
}

/*
UNEGYPTIAN PEDAC:

Data Structure
==============
1. Input: array of denominators of unit function
2. Output: Number

Algo
====
1. Initialise a sum to zero which will eventually hold the result
2. Iterate through each element of the array 
3. Convert elements into unit fraction and add to the sum
4. Return sum

*/
function unegyptian(array) {
    // console.log(array);
    let result = array.reduce((sum, elem) => {
        // console.log("elem", elem);
        let unitFraction = new Fraction(1, elem);
        // console.log("unit fraction", unitFraction);
        // console.log("sum", sum);
        return sum.add(unitFraction);
    },new Fraction(0,1));
    // let result = array.reduce((sum, elem) => sum + 1/elem, 0);

    return Number(result);
}

// console.log(egyptian(new Fraction(2,1))); // this is {s: 1, n: 2, d: 1}
// console.log(egyptian(new Fraction(10,4)));
// console.log(egyptian(new Fraction(3,1)));
// console.log(egyptian(new Fraction(40,14)));
// console.log(egyptian(new Fraction(7,9)));
// console.log(egyptian(new Fraction(1,2)));


console.log(unegyptian(egyptian(new Fraction(1,2))));
console.log(unegyptian(egyptian(new Fraction(2,1))));
console.log(unegyptian(egyptian(new Fraction(3,4))));
console.log(unegyptian(egyptian(new Fraction(39,20))));
console.log(unegyptian(egyptian(new Fraction(127,130))));
console.log(unegyptian(egyptian(new Fraction(5,7))));
console.log(unegyptian(egyptian(new Fraction(2,1))));
console.log(unegyptian(egyptian(new Fraction(3,1))));
console.log(unegyptian(egyptian(new Fraction(1,1))));