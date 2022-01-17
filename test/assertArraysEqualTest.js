const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(['hey', 'ho'], ['hey', 'ho']);
// assertArraysEqual(['hey', 'hello'], ['hey', 'ho']);

describe('#assertArraysEqual', () => {
  it("returns ['hey', 'ho'] when given ['hey, 'ho']", () => {
    
    assert.strictEqual(assertArraysEqual(['hey', 'ho'], ['hey', 'ho']), true);
  });
});

