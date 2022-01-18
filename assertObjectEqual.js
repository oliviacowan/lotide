const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //modify function to use util library's inspection
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

module.exports = assertObjectsEqual;
assertObjectsEqual({a: "1", b: "2"}, {b: "2", a: "1"});
