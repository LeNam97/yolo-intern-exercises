
function sumN(number){
  var sum = 1;
  var num = parseInt(number);
  for(var i = 1; i <= num; i++){
    sum = sum * i;
  }
  return sum;
}

function out(numberIn){
  num = sumN(numberIn);
  console.log(num);
  do{
    var temp;
    temp = num % 10;
    num = Math.floor(num / 10);
  }while(temp == 0);
  
  return temp;
}

module.exports = {
  out
}