const {sumNumber} = require ('../bai15.js');

var assert = require('assert');

it('Bai 15 case 1', function() {
  
  const numbers = 1234;
  const result = sumNumber(numbers);

  const expect = 10;

  assert.deepEqual(result,expect);
}); 