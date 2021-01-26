const {testNumber} = require ('../bai8.js');

var assert = require('assert');

it('Bai 8 case 1', function() {
  const input = {
    a: 5
  }

  const result = testNumber(input.a);

  const expect = 1;

  assert.strictEqual(result,expect);
}); 