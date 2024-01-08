/*
for a given array, find the minimum sum of 5 consecutive numbers
if the array has less than 5 elements return null.

[1,2,3,4] => null
[1,2,3,4,5,6,7,] => 15
[1,2,3,4,5,-5] => 9
[-1, -5, -3, 0, -1, 2, -4] => -10

*/

function minimumSum(array) {
    if (array.length < 5) return null;
    
    let sumArray = [];
    
    //form subarrays of 5 elements from the array
    let maxSubArrays = array.length - 5 + 1;
    for(let indexSubArray = 0; indexSubArray < maxSubArrays ; indexSubArray += 1) {
        let subArray = array.slice(indexSubArray, indexSubArray + 5);
        let sumSubArray = subArray.reduce((a,b) => a + b);
        sumArray.push(sumSubArray);
    }
    
    return Math.min(...sumArray);
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);