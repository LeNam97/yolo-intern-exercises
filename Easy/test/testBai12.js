const {averageArray} = require ('../bai12.js');

var assert = require('assert');

it('Bai 12 case 1', function() {
  const input = [1,2,3]

  const result = averageArray(input);

  const expect = 2;

  assert.strictEqual(result,expect);
}); 