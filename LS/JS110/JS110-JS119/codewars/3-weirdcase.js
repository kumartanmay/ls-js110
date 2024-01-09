/*
convert every fourth char of every second word in a string to a uppercase. rest of the string remains unchanged

algo
1. split the string into an array of words
2. from the second word, slice upto third char, convert the fourth to uppercase, concat the fifth char onwards
3. join the array
*/

function toWeirdCase(text) {
    let textArr = text.split(' ');
    let result = textArr.map((word, index) => {
        if(index % 2) {
            word = alterEveryFourthLetter(word);
        }
        return word;
    });
    // console.log(result);
    return result.join(' ');
}

function alterEveryFourthLetter(word) {
    for(let letterIndex = 0; letterIndex < word.length; letterIndex += 1) {
        if ((letterIndex + 1) % 4 === 0) {
            word = word.slice(0, letterIndex) + word[letterIndex].toUpperCase() + word.slice(letterIndex + 1);
        }
    }
    return word;
}

// console.log(alterEveryFourthLetter('supercalifragilisticexpialidocious'));
// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world'));

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');