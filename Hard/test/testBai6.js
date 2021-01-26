
const {sepXepGiamArray} = require ('../bai6.js');

var assert = require('assert');

it('Bai 6 case 1', function() {

  const arrayA = [8,3,5];
  const arrayB = [11,43,23];

  const result = sepXepGiamArray(arrayA,arrayB);

  const expect = [43,23,11,8,5,3];

  assert.deepEqual(result,expect);
}); 