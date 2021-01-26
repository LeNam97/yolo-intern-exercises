function minArray(arr){
  
  let min = arr[0];

  for(var i = 1 ; i < arr.length ; i++){
    if(min >= arr[i]){
      min = arr[i];
    }
  }
  return min;
}
module.exports = {
  minArray
}