
const {out} = require ('../bai11.js');

var assert = require('assert');

it('Bai 11 case 1', function() {

  const number = 12;

  const result = out(number);

  const expect = 6;

  assert.deepEqual(result,expect);
}); 