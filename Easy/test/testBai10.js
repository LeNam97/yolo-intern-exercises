const {maxArray} = require ('../bai10.js');

var assert = require('assert');

it('Bai 10 case 1', function() {
  const input = [1,2,3,4,5,6,7]

  const result = maxArray(input);

  const expect = 7;

  assert.strictEqual(result,expect);
}); 