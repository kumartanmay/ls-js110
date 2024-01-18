function scramble(str1, str2) {
  /*
  check if letters of str2 exists in str1,
  if yes, remove it from str1 after pushing it to a new array
  sort str2 and new  array and compare if they form the same string.
  */
  
  let newStr1 = str1.split('');
  let newStr2 = [];
  str2.split('').forEach(letter => {
    if(newStr1.includes(letter)) {
      newStr2.push(letter);
      newStr1.splice(newStr1.indexOf(letter),1);
    }
  });
//   console.log(str1);
//   console.log(str2);
//   console.log(newStr2.sort().join(''));
//   console.log(str2.split('').sort().join(''));
  return newStr2.sort().join('') === str2.split('').sort().join('');
}

console.log(scramble('rkqodlw','world'));
console.log(scramble('cedewaraaossoqqyt','codewars'));
console.log(scramble('katas','steak'));
console.log(scramble('scriptjavx','javascript'));
console.log(scramble('scriptingjava','javascript'));
console.log(scramble('scriptsjava','javascripts'));
console.log(scramble('aabbcamaomsccdd','commas'));
console.log(scramble('aabbcamaomsccdd','commas'));
console.log(scramble('commas','commas'));