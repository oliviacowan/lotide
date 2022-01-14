const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
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
 
  
//   if (oneKey.length === twoKey.length) {
//     for (let i = 0; i < Object.values(object2).length; i++) {
//       if (Object.values(object1)[i] === Object.values(object2)[i]) {
//       //if (object1[i] === object2[i] && typeof object1[i] === typeof object2[i]) {
//         console.log(object1[i]);
//         console.log(object2[i]);
//         //console.log(object1[i] === object2[i] && typeof object1[i] === typeof object2[i])
//         return true;
//       }
//       else {
//         return false;
//       }
//     }

//   } else {
//     return false;
//   }
// };


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), false); // => false


