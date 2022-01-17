const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectEqual');
const eqObjects = require('./eqObjects');
const map = require('./map');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqObjects,
  map,
  letterPositions,
  findKeyByValue,
  findKey,
  countOnly,
  countLetters
};



// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle,
//   eqArrays: eqArrays,
//   assertEqual: assertEqual,
//   assertArraysEqual: assertArraysEqual,
//   assertObjectsEqual: assertObjectsEqual,
//   eqObjects: eqObjects,
//   map: map,
//   letterPositions: letterPositions,
//   findKeyByValue: findKeyByValue,
//   findKey: findKey,
//   countOnly: countOnly,
//   countLetters: countLetters
// };