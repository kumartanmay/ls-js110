/*
Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, 
then combining those nested subarrays back together in sorted order. It is best explained with an example.

Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. 
We'll start off by breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]

We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

Write a function that takes an array argument and returns a new array that contains the values 
from the input array in sorted order. 
The function should sort the array using the merge sort algorithm as described above. 
You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.

Examples:
mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

PROBLEM:
Input: Array
Output: Array

Info:
1. Return a sorted array from the given input
2. All the elements in the array will be either numbers or strings
3. All the elements in the array will be of same datatype
4. The original array must not mutate

Examples:
Check implicit requirements and develop mental model
Input -> Intermediate Nested Arrays -> Atomic Array -> Flatten and Merge sorted arrays -> Flat Sorted Array

[9, 5, 1, 7, 2]
[[9,5,1],[7,2]]
[[[9,5],[1]],[[7],[2]]]
[[[[9],[5]],[1]],[[7],[2]]]
[[[5,9],[1]],[[7],[2]]]
[[1,5,9],[2,7]]
[1,2,5,7,9]

Mental model:
Divide the arrays into halves until the length of each is 1.
An array with one element is always sorted.
Sort and merge the arrays until the array is flattened to one layer

Data Structure: Output is an array

Algo:
1. Divide the array and nested arrays into halves until each subarray has only one element.
2. Start = Index of first element of the array
3. end = Index of last element of the array
4. mid = start + (end-1) / 2
5. Iterate steps 1 to 4 until the array is atomic
*/

function mergeSort(array) {
    if (array.length === 1) return array;
  
    let left = array.slice(0, Math.floor(array.length/2));
    let right = array.slice(Math.floor(array.length/2));
  
    let sortLeft = mergeSort(left);
    let sortRight = mergeSort(right);
  
    return merge(sortLeft, sortRight);
  }

function merge(array1, array2) {
    // array 1 and array 2 are sorted
    // merge them both without mutating any of them
    // the resulting array is a sorted array
    let first = [...array1];
    let second = [...array1];
    let result = [];

    // compare each value of the first array with the first element of the second
    // if the value of the first array is smaller than the first element second, pop the first
    // element of the first array and push it to result
    // if value of the first array is greater than the first element of the second, pop it off
    // and push it to the result
    // one of the arrays will have an element left at the end, push that element to the resulting array

    while(first.length > 0 && second.length > 0) {
        if(first[0] < second[0]) {
            result.push(first[0]);
            first.shift()
        } else {
            result.push(second[0]);
            second.shift();
        }
    }

    if(first.length) {
        result = result.concat(first);
    } else {
        result = result.concat(second);
    }

    return result;
}

console.log(merge([1,9,4],[3,2,8]));