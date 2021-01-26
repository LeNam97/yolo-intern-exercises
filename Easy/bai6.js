function sumEvenNumbers(arr){
  var sum = 0;
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 == 0){
      sum = sum + arr[i];
    }
  }
  return sum;
}

module.exports = {
  sumEvenNumbers
}
