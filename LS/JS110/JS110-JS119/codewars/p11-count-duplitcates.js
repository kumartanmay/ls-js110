/*
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  //find the frequency of each letter in the text -> object {alpha: frequency}
  //return the count of alphas with frequency greater than 1
  let textObj = frequencyObj(text.toLowerCase());
 
  // find keys with values greater than 1
  let result = [];
  for(let key in textObj) {
    if(textObj[key] > 1) result.push(key);
  }
  
  return result.length;
}

function frequencyObj(text) {
  let result = {};
  text.split('').forEach(elem => {
    result[elem] ? result[elem]++ : result[elem] = 1;
  })
  return result;
}

console.log(duplicateCount("") === 0);
console.log(duplicateCount("abcde") === 0);
console.log(duplicateCount("aabbcde") === 2);
console.log(duplicateCount("aabBcde") === 2);
console.log(duplicateCount("Indivisibility") === 1);
console.log(duplicateCount("Indivisibilities") === 2);