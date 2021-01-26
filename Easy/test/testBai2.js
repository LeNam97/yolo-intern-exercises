const {power} = require ('../bai2.js');
//console.log(power);

var assert = require('assert');

it('Bai 2 case 1', function() {
  const input = {
    a: 2,
    b: 4
  }

  const result = power(input.a,input.b);

  const expect = 16;

  assert.strictEqual(result,expect);
}); 