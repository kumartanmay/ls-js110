/*
info:
1. you have a number with n digits
2. take the left most digit and shift to the rightmost position
3. next, take the number starting from second on the left and shift the first digit to the right most position
4. next, take the number statting from third on the left and shigt the first digit to the right most position
5. ... so on until you reach the last two digits
6. the resulting number is max rotation number

example
=======
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

ds:
===
a variable to store modified number at each iteration

algo:
=====
1. convert the number into a list of consituent digits
2. iterate over the list and change the position of the elements at each iteration
3. the position of iteration will be determined by the count of iteration
*/

function maxRotation(num) {
    let iter = numArray(num).length;
    let result = num;
    for (let i = 0; i < iter; i++) {
        result = rotateLeftmostDigit(result, i);
    }
    
    console.log(Number(result));
}

function rotateLeftmostDigit(num, index) {
    let digits = numArray(num);
    let result = digits.slice(0,index).concat(digits.slice(index + 1),digits[index]);
    return result.join("");
}

function numArray(num) {
    return String(num).split("");
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(1005);
maxRotation(8703529146);      // 7321609845