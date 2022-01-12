const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i] || typeof arr1[i] !== typeof arr2[i]) {
        return false;
      }
  }
  return true;
}

const without = function(input, itemsToRemove) {
  let filtResult = [];
  for (let i = 0; i < input.length; i++) {
    
      if (!itemsToRemove.includes(input[i])) {
        filtResult.push(input[i]);
      }
    }
return filtResult;
}

  
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

