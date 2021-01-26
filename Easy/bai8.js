function testNumber(num){
  if(num <= 2){
    return 0;
  }else{
    for(var i = 2; i <= num; i++ ){
      if(num.a % i == 0){
         return 0;
      }
    }
    return 1; 
  }
}

module.exports = {
  testNumber
}