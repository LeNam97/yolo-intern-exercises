function getRandomNumbers(from,to){
  console.log(Math.floor(Math.random() * (to - from) + from));
}

var numberFrom = 10;
var numberTo = 100;
getRandomNumbers(numberFrom,numberTo);
