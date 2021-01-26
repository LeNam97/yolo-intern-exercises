
function sumN(number){
  var sum = 1;
  var num = parseInt(number);
  for(var i = 1; i <= num; i++){
    sum = sum * i;
  }
  return sum;
}

function nZero(numberIn){
  num = sumN(numberIn);
  console.log(num);
  var count = 0;
  do{
    var temp;
    temp = num % 10;
    if(temp == 0){
      count += 1;
    }
    num = Math.floor(num / 10);
  }while(num != 0);
  
  return count;
}
module.exports = {
  nZero
}