
function taxMoney(money,month){
  var mon = 0;
  if(money < 20000000){
    mon = (money * 0.05) * month;
    return mon;
  }else if(money >20000000 && money < 50000000){
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