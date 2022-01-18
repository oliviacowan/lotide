
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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
 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), false); // => false
module.exports = eqObjects;


