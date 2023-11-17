/*
given two arrays of numbers, return a sorted array of all the possible products of elements in two arrays
arrays will contain numbers only

example
=======
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

ds:
==
input: two arrays
output: new array

algo:
=====
1. simultaneously iterate over the elements of the first and second array
2. Store the multiplication of elements at each iteration
3. return the element
*/

function multiplyAllPairs(arr1, arr2) {
    let result = [];
    arr1.forEach((num1 => {
        arr2.forEach(num2 => result.push(num1 * num2))
    }))
    result.sort((a,b) => a - b);
    return result;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));