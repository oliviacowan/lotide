const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};



const tail = function(array) {
  if (array.length === 1) {
    return('[]');
  } else if (array.length === 0) {
    return ('[]');
  }
  return array.slice(1);
};

module.exports = tail;
