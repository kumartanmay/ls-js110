/*
Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240

The input string always has more than five digits.
*/

function greatestProduct(input) {
  // create substrings of 5 consecutive digits (slice)
  // multiple all the digits in a substring
  console.log(input);
  let subStrings = [];
  for (let index = 0; index < input.length; index++) {
    subStrings.push(input.slice(index, index+5))
  }
  let products = subStrings.filter(string => string.length ===5).map(elem => {
    return elem.split('').map(Number).reduce((a,b) => a * b, 1)
  })
  return Math.max(...products);
}

console.log(greatestProduct("123834539327238239583") === 3240);
console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
console.log(greatestProduct("02494037820244202221011110532909999") === 0);