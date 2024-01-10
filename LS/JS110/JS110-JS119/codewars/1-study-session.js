// Given an array of numbers, return true if any 5 consecutive numbers are greater than 3. 
// If there are less than 5 numbers in the array, return true if all are greater than 3. -- Kumar

// Test cases
/*
console.log(checkConsecutiveNumbers([4, 5, 6, 7, 8])); // true
console.log(checkConsecutiveNumbers([2, 4, 5, 6, 7, 8])); // true
console.log(checkConsecutiveNumbers([1, 2, 3, 4, 5])); // false
console.log(checkConsecutiveNumbers([4, 4])); // true (less than 5 numbers, all greater than 3)
console.log(checkConsecutiveNumbers([2, 2])); // false (less than 5 numbers, not all greater than 3)

info:
5 consecutive numbers by index
return true if 5 of them are greater than 3
if less than less than 5 numbers in the array, then return true if all are greater than 3

ds:
input: array
output: boolean

algo:
1. find subarrays of five consecutive elements
2. Check if every element in subarray is greater than true 
*/

function checkConsecutiveNumbers(array) {
    if(array.length < 5) {
        return array.every(elem => elem > 3);
    }
    
    // subarrays of length 5
    let maxCountSubArrays = array.length - 5 + 1;
    let boolean = false;
    
    for(let count = 0; count < maxCountSubArrays; count += 1) {
        let subarray = [];
        for (let index = count; index < count + 5; index += 1) {
            subarray.push(array[index]);
        }
        // console.log(subarray);
        boolean = subarray.every(elem => elem > 3);
    }
    return boolean;
}

console.log(checkConsecutiveNumbers([4, 5, 6, 7, 8])); // true
console.log(checkConsecutiveNumbers([2, 4, 5, 6, 7, 8])); // true
console.log(checkConsecutiveNumbers([1, 2, 3, 4, 5])); // false
console.log(checkConsecutiveNumbers([4, 4])); // true (less than 5 numbers, all greater than 3)
console.log(checkConsecutiveNumbers([2, 2])); // false (less than 5 numbers, not all greater than 3)