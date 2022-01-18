const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  let results = {};
  let i = 0;
  for (const letter of sentence) {
    
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
      i++;
    } else {
      i++;
    }

  }
  return results;
};

module.exports = letterPositions;
console.log(assertArraysEqual(letterPositions('hello').e, [1]));