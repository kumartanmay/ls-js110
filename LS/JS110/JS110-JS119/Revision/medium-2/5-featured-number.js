/*

Featured number: an odd multiple of seven which has no repeating digit
Given a number, find the next featured number.
if there is no featured number, return an appropriate error message.

ex:
==
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

ds:
==
input: number
output: number (featured number)

other vars
var to store multiples of seven
var to store digits of multiples of seven

function to determine repeat digits in multiples of seven

algo
====
1. Determine the quotient of the number and add 1 to the floor value of it
2. find the next multiples seven to derive featured number
    a. for each multiple of seven determine the digits
    b. sort the digits and compare it with the previous element
    c. if previous element is not same as current, go to the next element
3. if it is same, then go to the next multiple
    a. if none of the elements are same, return the multiple
    b. if the multiple is greater than 9876543201 then return error message
*/

function featuredNumberAfter(number) {
    let startingQuotient = Math.floor(number / 7);
    let multiple = 7 * (startingQuotient+1);
    // console.log(repeatDigits(multiple));
    while((repeatDigits(multiple).length > 0) || (multiple % 2 === 0)) {
        startingQuotient++;
        multiple = 7 * startingQuotient;
        if (multiple > 9876543201) return "There is no featured number";
    }
    
    return multiple;
}

function repeatDigits(multiple) {
    let digits = String(multiple).split(''); // returns an array of digits; type of elements is string
    digits.sort((a,b) => a - b);
    
    let repeats = digits.filter((digit, index) => digit === digits[index+1]);
    return repeats;
}

console.log(featuredNumberAfter(12));
console.log(featuredNumberAfter(20));
console.log(featuredNumberAfter(21));
console.log(featuredNumberAfter(997));
console.log(featuredNumberAfter(1029));
console.log(featuredNumberAfter(999999));
console.log(featuredNumberAfter(999999987));
console.log(featuredNumberAfter(9876543201));