const {countOddNumbers} = require ('../bai5.js');
//console.log(power);

var assert = require('assert');

it('Bai 5 case 1', function() {
  const input = [1,2,3,4,5,6,7]

  const result = countOddNumbers(input);

  const expect = 4;

  assert.strictEqual(result,expect);
}); 