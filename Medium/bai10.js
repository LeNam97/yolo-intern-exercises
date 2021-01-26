var namesOnes = ["Hoang", "Dong", "Nhung", "Hoa", "Trung", "Khoa"];

var nameTwos = ["Hoang", "Khoa"];

function ValueNInArray(arrayOne,arrayTwo){
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
  return arrayTwo.length - dem;
}
module.exports = {
  ValueNInArray
}