const {testOddAndEven} = require ('../bai3.js');
//console.log(power);

var assert = require('assert');

it('Bai 3 case 1', function() {
  const input = {
    a: 2,
    b: 1
  }

  const result = testOddAndEven(input);

  const expect = -1;

  assert.strictEqual(result,expect);
}); 