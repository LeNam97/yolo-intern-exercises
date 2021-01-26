const {joinArray} = require ('../bai2.js');

var assert = require('assert');

it('Bai 2 case 1', function() {
  var inputTwo = ['Hoang', 'Dong'];

  const inputOne = ['Ha Noi', 'Kien Giang'];

  const result = joinArray(inputOne,inputTwo);

  const expect = ['Ha Noi','Kien Giang','Hoang','Dong'];

  assert.deepEqual(result,expect);
}); 