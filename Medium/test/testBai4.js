const {subtractionArray} = require ('../bai4.js');

var assert = require('assert');

it('Bai 4 case 1', function() {
  const numbersOne = [7,2,3,4,5];

  const numbersTwo = [6,7,8,9,10];
  
  const result = subtractionArray(numbersOne,numbersTwo);

  const expect = [1,-5,-5,-5,-5];

  assert.deepEqual(result,expect);
}); 