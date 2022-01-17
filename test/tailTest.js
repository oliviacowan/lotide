
const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail = require('../tail');
//const words = ["Hello", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

//const array = tail(["Hello", "Lighthouse", "Labs"]);
//  assertEqual(result.length, 2); // ensure we get back two elements
//  assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//  assertEqual(result[1], "Labs"); // ensure second element is "Labs"

 describe("#tail", () => {
   it("returns 2 for array.length", () => {
     assert.equal(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
   });
   it('returns the correct first element for the result array', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
   });
   it('returns the correct second element for the result array', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
   });
 });