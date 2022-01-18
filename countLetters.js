const assertEqual =require('./assertEqual');

const countLetters = function(sentence) {
  let count = {};
  for (const letter of sentence) {
    //console.log(letter);
    if (letter !== ' ') {
      if(count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }

    }
  }
  return count;
};

module.exports = countLetters;
console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(countLetters("lighthouse in the house").l, 1));