
function searchValueInArray(arrayOne,arrayTwo){
  var dem = 0;

  if(arrayOne.length > arrayTwo.length){
    var temp = [];
    temp = arrayOne;
    arrayOne = arrayTwo;
    arrayTwo = temp;
  }
  for(var i = 0; i < arrayOne.length; i++){
    for(var j = 0; j < arrayTwo.length; j++){
      if(arrayOne[i] == arrayTwo[j]){
        dem += 1;
      }
    }
  }
  return dem;
}
module.exports = {
  searchValueInArray
}