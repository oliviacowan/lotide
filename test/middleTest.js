const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// (assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4])); // => [3, 4]
// (assertArraysEqual((middle([1, 2, 3])), [2])); // => [2]
// (assertArraysEqual((middle([1, 2, 3, 4, 5])), [3])); // => [3]
// (assertArraysEqual((middle([1, 2, 3, 4, 5, 6, 7])), [4]))
describe('#middle', () => {
  it('returns [3, 4] when given the string [1, 2, 3, 4, 5, 6]', () => {
    const actual = [1, 2, 3, 4, 5, 6];
    const expected = [3, 4];
    assert.deepEqual(middle(actual), expected);
  });
});