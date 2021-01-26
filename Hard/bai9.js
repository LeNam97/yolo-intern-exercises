var namesOnes = ["Hoang", "Dong", "Nhung", "Hoa", "Trung", "Khoa", "Nhung"];

var nameTwos = ["Hoang", "Khoa", "Nhung"];

function searchValueInArray(arrayOne,arrayTwo){

  if(arrayOne.length > arrayTwo.length){
    var temp = [];
    temp = arrayOne;
    arrayOne = arrayTwo;
    arrayTwo = temp;
  }
  for(var i = 0; i < arrayOne.length; i++){
    var dem = 0;
    for(var j = 0; j < arrayTwo.length; j++){
      if(arrayOne[i] == arrayTwo[j]){
        dem += 1;
      }
    }
    console.log(arrayOne[i] +" : "+ dem);
  }
}

searchValueInArray(nameTwos,namesOnes);