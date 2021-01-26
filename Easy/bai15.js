function sumFactorial(number){
  sum = 1;
  for(var i = 1; i <= number; i++){
    sum *= i;
  }
  return sum;
}
module.exports = {
  sumFactorial
}