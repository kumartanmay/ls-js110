/*
Implement a binarySearch function that takes an array and a searchItem as arguments, and 
returns the index of the searchItem if found, or -1 otherwise. 
You may assume that the array argument will always be sorted.


PROBLEM
=======
Input: str + array
Output: Number (index of an element in the array or -1)

Info:
1. Array is always sorted
2. Return the index of the element in the array which is same as the search item
3. If not, return -1


Examples:
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

Data Structure:
Output: Number 

ALGO:
1. Determine the mid point of the array
2. If the mid element of the array is same as search item, return index of the mid element
3. If search item is greater than mid element, start index is the next index after mid
4. If search item is less than mid element, end index is the index before mid
5. Else return -1
*/

function binarySearch(copyYellowPages, searchItem) {
    let start = 0;
    let end = copyYellowPages.length - 1;

    while (end >= start) {
        let mid = Math.floor((start + end)/2);
        if(searchItem === copyYellowPages[mid]) return mid;
        else if (searchItem > copyYellowPages[mid]) {
            start = mid + 1;
        } else  {
            end = mid - 1;
        }
    }
    return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6