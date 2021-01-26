const {getBill} = require ('../bai13.js');

var assert = require('assert');

it('Bai 13 case 1', function() {
  const timeCheckIn = new Date("2021-01-13T09:00:00+07:00");
  const timeCheckOut = new Date("2021-01-13T20:00:00+07:00");
  const result = getBill(timeCheckIn,timeCheckOut);
  const expect = 590000;
  assert.equal(result,expect);
}); 
it('Bai 13 case 2', function() {
  const timeCheckIn = new Date("2021-01-13T23:00:00+07:00");
  const timeCheckOut = new Date("2021-01-14T01:00:00+07:00");
  const result = getBill(timeCheckIn,timeCheckOut);
  const expect = 160000;
  assert.equal(result,expect);
}); 
it('Bai 13 case 3', function() {
  const timeCheckIn = new Date("2021-01-13T23:00:00+07:00");
  const timeCheckOut = new Date("2021-01-14T09:00:00+07:00");
  const result = getBill(timeCheckIn,timeCheckOut);
  const expect = 200000;
  assert.equal(result,expect);
}); 