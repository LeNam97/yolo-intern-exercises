const {ValueNInArray} = require ('../bai10.js');

var assert = require('assert');

it('Bai 10 case 1', function() {
  const namesOnes = ["Hoang", "Dong", "Nhung", "Hoa", "Trung", "Khoa"];

  const nameTwos = ["Hoang", "Khoa", "Nhung"];

  const result = ValueNInArray(namesOnes,nameTwos);

  const expect = 3;

  assert.deepEqual(result,expect);
}); 