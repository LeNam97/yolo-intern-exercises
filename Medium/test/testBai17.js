const {substring} = require ('../bai17.js');

var assert = require('assert');

it('Bai 17 case 1', function() {
  
  const strings = "Xin chao moi nguoi minh la Cao Thuy Dung";
  const result = substring(strings,4,16);

  const expect = "chao moi ngu";

  assert.deepEqual(result,expect);
}); 