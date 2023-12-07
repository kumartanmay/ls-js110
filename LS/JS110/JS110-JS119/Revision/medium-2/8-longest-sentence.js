/*
Given a string, return the largest sentence and the count of words in it.
Sentence may end with `?`, `!` or `.`

Chars that are non-space or sentence-ending chars are part of a word.

ds
==
input: string
output: string

other vars
-----------
constant word-end chars

algo
====
1. split the sentence by whitespace chars
2. find the index of word-ending chars
3. join the elements until the indices of word-ending chars
4. find the largest sentence among them - sort it in descending order. The first element is the largest one.
5. find the count of words in it - log it
*/

const WORD_ENDING_CHARS = ['!', '.', '?'];

function longestSentence(input) {
    let words = input.split(" ");
    let indicesWordEndChars = [];
    // find word ending chars in words
    // store the index of the word
    words.forEach((word, index) => {
        if(findWordEndingChars(word).length) indicesWordEndChars.push(index);
    })
    
    // join the words until the index
    let totalSentences = indicesWordEndChars.length;
    
    let sentenceArray = [];
    let start = 0;
    for(let i = 0; i < totalSentences; i++) {
        if(i > 0) start = indicesWordEndChars[i-1] + 1;
        sentenceArray[i] = joinSentence(words, start, indicesWordEndChars[i]).trim();
    }
    console.log(sentenceArray);
    sentenceArray.sort((a,b) => b.split(" ").length - a.split(" ").length);
    
    console.log(sentenceArray[0]);
    return `The Largest sentence has ${sentenceArray[0].split(' ').length} words.`;
    
}

function findWordEndingChars(word) {
    return word.split('').filter(char => WORD_ENDING_CHARS.includes(char));
}

function joinSentence(wordsArray, start, end) {
    let sentence = '';
    for (let i = start; i <= end; i++) {
        sentence = sentence + wordsArray[i] + ' ';
    }
    
    return sentence;
}

console.log(longestSentence("To be or not to be! Is that the question?"));
console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

console.log(longestSentence(longerText));