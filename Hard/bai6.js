
function sepXepGiamArray(arrayA,arrayB){
  var arrayC = [];  
  arrayC = arrayA.concat(arrayB);
  arrayC.sort(function(a, b){
    return b - a;
  });
  return arrayC;
}

module.exports = {
  sepXepGiamArray
}