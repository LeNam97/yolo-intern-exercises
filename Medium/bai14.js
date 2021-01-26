function taxMoney(money,month){
  const numOne = 20000000;
  const numTwo = 50000000;
  var mon = 0;
  if(money < numOne){
    mon = (money * 0.05) * month;
    return mon;
  }else if(money > numOne && money < numTwo){
    mon = (money * 0,1) * month;
    return mon;
  }else{
    mon = (money * 0.2) * month;
    return mon;
  }
}

module.exports = {
  taxMoney
}