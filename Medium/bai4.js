
function subtractionArray(arrayOne,arrayTwo){
  var arrayThree = [];
  for(var i = 0; i < arrayOne.length; i++){
    arrayThree[i] = arrayOne[i] - arrayTwo[i];
  }
  return arrayThree;
}

module.exports = {
  subtractionArray
}