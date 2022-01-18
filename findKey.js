
const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
let keyArr = Object.keys(object);
for (const key of keyArr) {
  
  if(callback(object[key])) {
    return key;
  }
}
}
module.exports = findKey;

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma")




