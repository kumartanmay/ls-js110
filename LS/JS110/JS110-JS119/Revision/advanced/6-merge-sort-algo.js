/*
given an array of numbers, sort them recursively by creating nested arrays.
Then take the adjacent elements, sort and merge the nested arrays.

ex:
==
[9, 5, 8, 7]
[[9, 5],[8, 7]]
[[[9],[5]],[[8],[7]]]
[[5, 9], [7, 8]]
[5, 7, 8, 9]

ds:
===
input: array
output: same sorted array

other vars
length of the array
middle of array
function to merge sorted arrays

algo
====
1. Determine the length and middle of the array
2. create new subarrays, starting from zero to mid and mid + 1 to the last element in the array
3. Iterate through the subarray, if the length of subarray is greater than 1
    a. Go to 1
4. Now the length of nested arrays is 1, all the nested arrays are sorted
5. function to merge two sorted arrays
    a. create copies of the arrays
    b. initiate an empty array to store the result
    c. compare the first elements of both the arrays, push the smaller into the result and delete it
    d. iterate through step 5c until length of one of the arrays is zero
    e. concatenate the resulting array with the array that has elements left in it
*/

function mergeSort(array) {
    if (array.length === 1) return array;
    let subarray1 = array.slice(0, array.length/2);
    let subarray2 = array.slice(array.length/2);

    subarray1 = mergeSort(subarray1);
    subarray2 = mergeSort(subarray2);    
    
    return mergeSorted(subarray1, subarray2);
}

function mergeSorted(arr1, arr2) {
    let result = [];
    let copy1 = [...arr1];
    let copy2 = [...arr2];
    
    while(copy1.length > 0 && copy2.length > 0) {
        result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
    }
    
    return result.concat(copy1.length === 0? copy2 : copy1);
}

console.log(mergeSort([9,7,6,8]));
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]