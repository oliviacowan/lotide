const assert = require('chai').assert;
const assertEqual = require('../assertEqual');


// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 2);
describe("#assertEqual", () => {
  it('returns bootcamp for bootcamp', () => {
    assert.strictEqual(assertEqual('bootcamp', 'bootcamp'), true);
  });
  it('should return false with the input (1, 2)', () => {
    assert.strictEqual(assertEqual(1,2), false);
  })
});
