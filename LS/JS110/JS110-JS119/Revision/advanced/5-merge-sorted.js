/*
given two sorted arrays, merge them in a sorted manner.
You cannot merge and then sort. 
The original arrays cannot be mutated.

ex
==
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

ds
==
Input: two sorted arrays
Output: a new array

other variables

algo
====
1. Initiate an empty array to store the sorted numbers
2. Create copies of sorted arrays to perform operations on it
    a. If the first one is smaller, place it in the resulting array, delete the smaller one from the array, move to the next element
    b. If not, the other element will be placed in the resulting array, delete the other one and compare it with next element of second array
3. Concat the elements remaining in either of the arrays in the resulting array
*/

function merge(sorted1, sorted2) {
    let mergedSorted = [];
    /*
    if(!(sorted1.length && sorted2.length)) {
        mergedSorted = sorted1.concat(sorted2);
        return mergedSorted;
    }*/
    
    let copy1 = [...sorted1];
    let copy2 = [...sorted2];
    
    while (copy1.length > 0 && copy2.length > 0) {
        mergedSorted.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift())
    }
    
    return mergedSorted.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([2, 6, 8], [1, 5, 9]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]