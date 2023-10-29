let arr = Object.freeze([[1], [2], [3]]);
// arr[2].push(4);
console.log(arr.length);
console.log(arr); // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]