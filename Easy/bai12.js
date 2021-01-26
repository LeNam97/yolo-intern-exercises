function averageArray(arr){
  var average = 0;
  for(var i = 0; i < arr.length ; i++){
    average += arr[i];
  }
  result = average/arr.length;
  return result;
}
module.exports = {
  averageArray
}