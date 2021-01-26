const {reverseArray} = require ('../bai13.js');

var assert = require('assert');

it('Bai 13 case 1', function() {
  const input = [1,2,3,4];
  const result = reverseArray(input);

  const expect =[4,3,2,1];

  assert.strictEqual(result,expect);
}); 