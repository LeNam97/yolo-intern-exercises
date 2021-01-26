const {sumFactorial} = require ('../bai15.js');

var assert = require('assert');

it('Bai 15 case 1', function() {
  const input = {
    a: 3

  };

  const result = sumFactorial(input.a);

  const expect = (6);

  assert.strictEqual(result,expect);
}); 