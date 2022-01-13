const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(countLetters("lighthouse in the house").l, i));