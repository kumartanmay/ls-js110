/*
given a sorted array, search the given item and return the index of the item.
Assume: the array is always sorted and all elements are of same data type

ex
==
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

ds
==
input: array, search-item
output: index of the search-item in the array

other vars
----------
copy of the array
mid element of the array
first half of the array
second half of the array

algo
====
0. create a copy of the array
1. find the mid element of the array
2. firsthalf = array from first item to the mid element; second half = array from the next element to the mid until the last element
3. compare the mid element with the search item
    a. if search item is greater than mid element, replace the search array with the second half
    b. if search item is lesser than mid element, replace the search array with first half
4. Go to step 0 until seearch iteam is found
5. if not, return -1
*/

function binarySearch(array, searchItem) {
    // return array.indexOf(item);
    // let midIndex = Math.floor(array.length / 2);
    // let midItem = array[midIndex];
    let startIndex = 0;
    let endIndex = array.length - 1;
    
    while(startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2);
        if(array[midIndex] === searchItem) return midIndex;
        else if(array[midIndex] < searchItem) startIndex = midIndex + 1;
        else endIndex = midIndex - 1;
    }
    
    return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Eat a Lot'));                   // 4
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
console.log(binarySearch(yellowPages, 'Zooper'));                // 9