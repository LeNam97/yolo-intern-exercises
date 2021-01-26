
const {sapXepTangArray} = require ('../bai5.js');

var assert = require('assert');

it('Bai 5 case 1', function() {

  const arrayA = [8,3,5];
  const arrayB = [11,43,23];

  const result = sapXepTangArray(arrayA,arrayB);

  const expect = [3,5,8,11,23,43];

  assert.deepEqual(result,expect);
}); 