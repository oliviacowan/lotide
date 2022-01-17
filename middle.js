const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


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
module.exports = middle;


  