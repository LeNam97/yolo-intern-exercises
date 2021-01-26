

function sumNumber(number){
  var sum = 0;
  var temp ;
  var num = parseInt(number);
  
  while(num != 0){
    temp = num % 10;
    sum = sum + temp;
    num = Math.floor( num / 10);
  }
  return sum;
}

module.exports = {
  sumNumber
}
