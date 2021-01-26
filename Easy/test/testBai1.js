const {reverse} = require ('../bai1.js')

var assert = require('assert');
it('Bai 1 case 1', function() {
  
  //Hàm mình truyền vào.
  const input = {
    a: 1,
    b: 2,
    c: 3
  };
  const result = reverse(input);

  //Kết quả mà mình mong muốn 
  const expect = {
    a: 2,
    b: 3,
    c: 1
  };
  // assert.equal(input, expect);
  assert.deepEqual(input, expect);
});