const {sliceArray} = require ('../bai7.js');

var assert = require('assert');

it('Bai 7 case 1', function() {
  var names = ["Hoang", "Dong", "Nhung", "Hoa", "Trung", "Khoa"];
  
  const result = sliceArray(names,1,4);

  const expect = ["Dong", "Nhung", "Hoa"];

  assert.deepEqual(result,expect);
}); 