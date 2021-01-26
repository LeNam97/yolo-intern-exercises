const {sumEvenNumbers} = require ('../bai6.js');
//console.log(power);

var assert = require('assert');

it('Bai 6 case 1', function() {
  const input = [1,2,3,4,5,6,7]

  const result = sumEvenNumbers(input);

  const expect = 12;

  assert.strictEqual(result,expect);
}); 