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


console.log(assertArraysEqual(letterPositions('hello').e, [1]));