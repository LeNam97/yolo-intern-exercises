
function joinArray(arrayOne, arrayTwo){
  var array = [''];
  var arrayThree= arrayOne.concat(arrayTwo);
  for(var i = 0; i < arrayThree.length; i++){
    array[i] = arrayThree[i];
  }
  return array; 
}
module.exports = {
  joinArray
}