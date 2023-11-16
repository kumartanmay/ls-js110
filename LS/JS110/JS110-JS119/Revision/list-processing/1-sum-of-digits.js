/*
prob
====
return the sum of digits of a number without using loop. Use iterating methods instead.

example
=======
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

ds
==
an array to store the digits of the number

algo
====
1. split the number into an array of digits
2. Reduce the sum of elements of the array
*/

function sum(num){
    let arrayDigits = String(num).split("");
    
    let numArrayDigits = arrayDigits.map(elem => Number(elem))
    console.log(numArrayDigits.reduce((a,b) => a+b));
}

sum(23);
sum(496);
sum(123456789);