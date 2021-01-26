const {subStr18} = require ('../bai18.js');

var assert = require('assert');

it('Bai 18 case 1', function() {
  
  const strings = "Xin chao moi nguoi minh la Cao Thuy Dung";

  const result = subStr18(strings,4,16);

  const expect = "chao moi nguoi m";

  assert.deepEqual(result,expect);
}); 