const assertEqual = require('./assertEqual');

const head = function(array) {
  let first = array[0];
  if (array.length === 0) {
    return (undefined);
  }
  if (array.length === 1) {
    return (array[0]);
  }
  return first;
};


module.exports = head;