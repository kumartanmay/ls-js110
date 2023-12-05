/*
given the index of the number in the fibonacci series, return the number.

ex
==
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

ds:
==
input: number (index of the number in series)
output: number (number at the index of the series)

algo:
====
1. at each recursion, check if the index of the number is same as the input
2. if not, continue
3. if yes, return the number
*/

function fibonacci(index) {
    let fiboSeries = [1, 1];
    
    if(index < 3) return 1;
    
    for(let count = 3; count <= index; count++) {
        fiboSeries[count - 1] = fiboSeries[count - 2] + fiboSeries[count - 3]
    }
    
    return fiboSeries[fiboSeries.length-1];
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));
console.log(fibonacci(100));