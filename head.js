const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let first = array[0];
  if (array.length === 0) {
    return (undefined);
  } else if (array.length === 1) {
    return (array[0]);
  } else {
    return first;
  }
};


assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");