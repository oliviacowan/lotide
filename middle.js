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
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};

const middle = function(array) {
  let middleNums = [];
  
  if (array.length % 2 === 1) {
    middleNums.push((Math.round(array.length / 2)));
    
    return middleNums;

  } else if (array.length % 2 === 0) {
    middleNums.push((array.length / 2), ((array.length / 2) + 1));
    return middleNums;
  }
};


console.log(assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4])); // => [3, 4]
  
console.log(assertArraysEqual((middle([1, 2, 3])), [2])); // => [2]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5])), [3])); // => [3]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5, 6, 7])), [4]))
  