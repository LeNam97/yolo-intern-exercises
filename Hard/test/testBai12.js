
const {nZero} = require ('../bai12.js');

var assert = require('assert');

it('Bai 12 case 1', function() {

  const number = 10;

  const result = nZero(number);

  const expect = 2;

  assert.deepEqual(result,expect);
}); 