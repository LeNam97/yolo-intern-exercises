const {sumOddNumbers} = require ('../bai7.js');
//console.log(power);

var assert = require('assert');

it('Bai 7 case 1', function() {
  const input = [1,2,3,4,5,6,7]

  const result = sumOddNumbers(input);

  const expect = 16;

  assert.strictEqual(result,expect);
}); 