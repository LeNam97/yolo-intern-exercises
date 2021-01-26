const {taxMoney} = require ('../bai14.js');

var assert = require('assert');

it('Bai 14 case 1', function() {
  
  const money = 60000000;
  const month = 4;
  
  const result = taxMoney(money,month);

  const expect = 48000000;

  assert.deepEqual(result,expect);
}); 