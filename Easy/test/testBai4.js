const {countEvenNumbers} = require ('../bai4.js');
//console.log(power);

var assert = require('assert');

it('Bai 4 case 1', function() {
  const input = [1,2,3,4,5,6]

  const result = countEvenNumbers(input);

  const expect = 3;

  assert.strictEqual(result,expect);
}); 