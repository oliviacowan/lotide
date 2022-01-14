const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
let valArr = Object.values(object);
for (const val of valArr) {
  if(object[val] === callback) {
    return val;
  }
}
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma")




/*const findKeyByValue = function(object, value) {
let keyArr = Object.keys(object)
for (const key of keyArr) {
  if (object[key] === value) {
    return key;
  }
}
};*/