
function sapXepTangArray(arrayA,arrayB){
  var arrayC = [];  
  arrayC = arrayA.concat(arrayB);
  arrayC.sort(function(a, b){
    return a - b;
  });
  return arrayC;
}

module.exports = {
  sapXepTangArray
}