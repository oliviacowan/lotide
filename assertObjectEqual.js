const eqObjects = function(object1, object2) {
  const oneKey = Object.keys(object1);
  const twoKey = Object.keys(object2);
  if (oneKey.length !== twoKey.length) {
    return false;
  }
  for (let key in object1) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    }
    if (Array.isArray(object1[key])) {
      if (Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])){
          console.log('i am triggered')
          return false;
        }
      }
    } else {
      if (object1[key] !== object2[key]) {
      return false;
      }
    }
  }
     return true;
    
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //modify function to use util library's inspection
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({a: "1", b: "2"}, {b: "2", a: "1"});
