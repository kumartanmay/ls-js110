/*
problem:
========
given an array of objects, sort the array by numerical property of the object

example:
========
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

output:
books = [
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' }
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
];

DS
==
Input: Array of objects
Output: Array of objects (same object is sorted by property)

algo
====
1. use the callback in sort method to sort by year of publishing
*/

function sortArrayOfObjects(array) {
    return array.sort((a,b) => a.published - b.published)
}

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(sortArrayOfObjects(books));