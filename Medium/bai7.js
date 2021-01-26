function sliceArray(array,start,end){

  var newArrays = [""];

  newArrays = array.slice(start,end);

  return newArrays;

}
module.exports = {
  sliceArray
}