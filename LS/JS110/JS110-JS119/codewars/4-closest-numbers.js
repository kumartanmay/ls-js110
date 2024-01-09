/*
given an array of numbers, return an array of two closest numbers.
return the first 

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

12,7,17 => 7,12,17 => 5,5
19,25,32,4,27,16 => 4,16,19,25,27,32 => 12,3,6,2,5

input: array
output: array

algo:
1. sort the numbers in ascending order
2. store the difference and the corresponding two elements as key-value pairs
3. find the lowest key, which is a string
4. return the value of lowest key
*/

function closestNumbers(array) {
    array.sort((a,b) => a - b);
    let objDifferencePairs = {};
    // console.log(array);
    for(let index = 1; index < array.length; index++) {
        objDifferencePairs[array[index] - array[index-1]] = [array[index], array[index-1]];
    }
    
    /*
    The side effect of using an object is that the pairs which are equidistant, the current pair will over-write the previous one.
    */
    let keys = Object.keys(objDifferencePairs);
    let smallestKey = Math.min(...keys.map(Number));
    return objDifferencePairs[smallestKey];
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
