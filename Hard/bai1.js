function reversStrings(string){
  var stringS = string.split(" ");
  console.log(stringS);
  
  for(var i = 0; i < stringS.length; i++){
    var newStringS = "";
    newStringS = stringS[i].split("").reverse().join("");
    console.log(newStrings);
  } 
  newStringS = newStringS.join(" ");
  return newStringS;
}
module.exports = {
  reversStrings
}