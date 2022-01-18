const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
let keyArr = Object.keys(object)
  for (const key of keyArr) {
    if (object[key] === value) {
      return key;
    }
  }
};
module.exports = findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
