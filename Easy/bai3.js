function testOddAndEven(input){
  if(input.a % 2 == 0 && input.b % 2 != 0 || input.a % 2 != 0 && input.b % 2 == 0){
    return -1;
  }
  if(input.a % 2 == 0 && input.b % 2 == 0 ){
    return 0;
  }else{
    return 1;
  }
}
module.exports = {
  testOddAndEven
}
