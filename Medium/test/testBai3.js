const {additionArray} = require ('../bai3.js');

var assert = require('assert');

it('Bai 3 case 1', function() {
  const numbersOne = [1,2,3,4,5];

  const numbersTwo = [5,4,3,2,1];
  
  const result = additionArray(numbersOne,numbersTwo);

  const expect = [6,6,6,6,6];

  assert.deepEqual(result,expect);
}); 