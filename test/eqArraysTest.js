const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false); // => should PASS

describe("#eqArrays", () => {
  it("returns true for the inputs [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for the inputs [1, 2, 3] and [1, '2', 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
  });
});