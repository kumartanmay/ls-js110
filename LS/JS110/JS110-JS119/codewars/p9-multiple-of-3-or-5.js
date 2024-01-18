/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
  /*
  1. find the numbers divisible by both 3 & 5 // divisible by 15
  2. push it to an array
  3. find multiples of 5 and push it to the array, if it is not in the array
  4. find multiple of 3 and push it to the array, if it is not in the array
  5. find the sum of the resulting array
  */
  if(number > 0) {
    let countMult15 = Math.floor(number / 15);
    let countMult5 = Math.floor(number / 5);
    let mult15 = multArr(15,countMult15);
    let mult5 = multArr(5, countMult5);
    mult5 = multFilterArr(mult5, mult15); // unique multiples of 5 that are not multiples of 15
    let countMult3 = Math.floor(number / 3);
    let mult3 = multArr(3, countMult3);
    mult3 = multFilterArr(mult3, mult5);
    mult3 = multFilterArr(mult3, mult15);
    let result = mult15.concat(mult5, mult3);
    // removing the number 
    if(result.includes(number)) result.splice(result.indexOf(number),1);
    // console.log(result);
    
    return result.reduce((a,b) => a + b,0);
  }
  return 0;
}

function multFilterArr(arr1, arr2) {
  return arr1.filter(elem => !arr2.includes(elem));
}

function multArr(num,count) {
  let result = [];
  for (let m = 1; m <= count; m++) {
    result.push(num * m)
  }
  return result;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(10));
console.log(solution(20));
console.log(solution(200));
console.log(solution(98443));
console.log(solution(-98443));