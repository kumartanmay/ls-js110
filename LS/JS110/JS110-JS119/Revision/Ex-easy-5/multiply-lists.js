/*
given two arrays of equal length, return an array with elements as a result of multiplication of elements in the same index

example
=======
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

ds
==
input: two arrays
output: a new array

algo:
====
1. iterate through each element of the array and multiply the corresponding element at the same index
2. return the multiplication to a new array
*/

function multiplyList(array1, array2) {
    return array1.map((elem, index) => elem * array2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]