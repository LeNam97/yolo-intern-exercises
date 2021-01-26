const {findStrings} = require ('../bai8.js');

var assert = require('assert');

it('Bai 8 case 1', function() {
  const names = ["Hoang", "Dong", "Nhung", "Hoa", "Trung", "Khoa"];
  
  const result = findStrings(names,"Nhung");

  const expect = 3;

  assert.deepEqual(result,expect);
}); 