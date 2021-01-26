var dateOne = new Date("2021-01-13T23:00:00+07:00");
var dateTwo = new Date("2021-01-14T01:00:00+07:00");
// var date = new Date("Wed, 27 July 2019 07:45:00+07:00");
// var timestamp = date.getTime();
// console.log(timestamp);

var timestampOne = Math.floor(dateOne.getTime()/1000.0);
var timestampTwo = Math.floor(dateTwo.getTime()/1000.0);

var timeStamp = timestampTwo - timestampOne;

//var date = new Date(timeStamp*1000);
console.log(timeStamp);