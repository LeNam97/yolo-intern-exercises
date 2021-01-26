function countEvenNumbers(arr){
  var count = 0;
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 == 0){
      count += 1;
    }
  }
  return count;
}
module.exports = {
  countEvenNumbers
}
