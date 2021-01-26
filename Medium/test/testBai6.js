const {divisionArray} = require ('../bai6.js');

var assert = require('assert');

it('Bai 6 case 1', function() {
  const numbersOne = [10,12,14,16,18];

  const numbersTwo = [2,2,2,2,2];
  
  const result = divisionArray(numbersOne,numbersTwo);

  const expect = [5,6,7,8,9];

  assert.deepEqual(result,expect);
}); 