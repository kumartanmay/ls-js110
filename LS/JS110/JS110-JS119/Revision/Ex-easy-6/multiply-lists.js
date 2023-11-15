/*
given a list of numbers, return an array which contains products of corresponding elements in both the lists.
Assume: both the lists are of equal length and contains numbers only.

example
=======
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

ds:
==
input: two arrays
output: an array

algo:
=====
1. iterate on each element of the first array and multiply the corresponding element
2. return the new array after end of iteration
*/

function multiply(list1, list2) {
    return list1.map((elem, index) => elem * list2[index]);
}

console.log(multiply([3,5,7],[9,10,11]));