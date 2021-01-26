const {reversStrings} = require ('../bai1.js');
var assert = require('assert');
it('Bai 1 case 1', function() {
  var string = "Hello Word";
  const result = reversStrings(string);
  const expect = "olleH droW";
  assert.deepEqual(result,expect);
}); 