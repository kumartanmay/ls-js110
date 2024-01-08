/*
given an array of numbers, return an array containing count of numbers smaller than it.
Only count the unique numbers

ex
==
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

ds
==
input: array
output: array

other variables
function to find the count of numbers smaller
---------
input: number, array
output: count

algo:
1. iterate over each element of the array
2. return a count from the callback function in map

[4,4,1,3,7,7,9] => [2,2,0,1,3,4]
[87,324,324,545,645,12] => [1,2,2,3,4,0]
*/

function smallerNumbersThanCurrent(array) {
    let result = [];
    
    array.forEach(num => {
        let counter = [];
        array.forEach(number => {if (num > number) counter.push(number)});
        result.push(countUniqueValues(counter));
    });
    
    return result;
}

function countUniqueValues(array) {
    // find the frequency of elements
    let frequency = {};
    array.forEach(num => {
        frequency[num] ? frequency[num]++ : frequency[num] = 1;
    })
    return Object.keys(frequency).length;
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]