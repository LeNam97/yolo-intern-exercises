const {minArray} = require ('../bai11.js');

var assert = require('assert');

it('Bai 11 case 1', function() {
  const input = [1,2,3,4,5,6,7]

  const result = minArray(input);

  const expect = 1;

  assert.strictEqual(result,expect);
}); 