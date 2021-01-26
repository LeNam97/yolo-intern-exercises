// Luật tính giá nhà nghỉ ở hà nội như sau:
//  - 2 tiếng đầu mỗi tiếng 70k
//  - Từ tiếng thứ 2 trở đi mỗi tiếng 50k
//  - Qua đêm 160k
//  - Giờ checkout khi qua đêm là 8h sáng hôm sau nếu quá 8h thì khách sẽ phải trả thêm 40k mỗi giờ
// Viết hàm tính số tiền khách phải trả khi vào nhà nghỉ dựa theo giờ khách vào và giờ khách ra
// Biết mốc qua đêm được tính là 24h

function isSameDay(checkInDate,checkOutDate){
  var dateIn = parseInt(checkInDate.getDate());
  var dateOut = parseInt(checkOutDate.getDate());
  var date = dateOut - dateIn;
  return date === 0;
}

function getTotalHours(checkInDate,checkOutDate){
  var timeStampIn = Math.floor(checkInDate.getTime()/1000.0);
  var timeStampOut = Math.floor(checkOutDate.getTime()/1000.0);
  var timeStamp = timeStampOut - timeStampIn;
  return timeStamp / 3600;
}

function getBill(checkInDate,checkOutDate){
  var _isSameDay = isSameDay(checkInDate,checkOutDate);
  var totalHours = getTotalHours(checkInDate,checkOutDate);
  var checkOutTime = checkOutDate.getHours();
  const initialCost = 70000;
  const regularCost = 50000;
  const overNightCost = 160000; 
  const lateCost = 40000;
  const lateTime = 8;
  const initialTime = 2;
  if(_isSameDay == false){
    if(checkOutTime <= lateTime){
      return overNightCost;
    }
    var lateHours = checkOutTime - lateTime;
    return overNightCost + lateHours * lateCost;
  }else{
    if(totalHours <= initialTime){
      return initialCost * totalHours;
    }
    return initialCost * initialTime + (totalHours - initialTime) * regularCost;
  }
  return 0 ;
}


module.exports = {
  getBill
}
