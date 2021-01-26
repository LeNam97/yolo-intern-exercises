const {multiplicationArray} = require ('../bai5.js');

var assert = require('assert');

it('Bai 5 case 1', function() {
  const numbersOne = [1,2,3,4,5];

  const numbersTwo = [5,4,3,2,1];
  
  const result = multiplicationArray(numbersOne,numbersTwo);

  const expect = [5,8,9,8,5];

  assert.deepEqual(result,expect);
}); 