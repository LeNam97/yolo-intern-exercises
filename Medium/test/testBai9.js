const {searchValueInArray} = require ('../bai9.js');

var assert = require('assert');

it('Bai 9 case 1', function() {
  const namesOnes = ["Hoang", "Dong", "Nhung", "Hoa", "Trung", "Khoa"];

  const nameTwos = ["Hoang", "Khoa", "Nhung"];

  const result = searchValueInArray(namesOnes,nameTwos);

  const expect = 3;

  assert.deepEqual(result,expect);
}); 