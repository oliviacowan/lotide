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
};

const takeUntil = function(array, callback) {
  const result = [];
  let i = 0;
  while (!callback(array[i]) && i < array.length) {
         result.push(array[i++]);
        };

  
  //other way that works:
  // for (let items of array) {
  //   if (!callback(items)) {
  //     result.push(items)
  //   } else {
  //     break;
  //   }
  // }
  return result;
 }


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2])
console.log('results 1: ', results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood'])
console.log('results 2: ', results2);

