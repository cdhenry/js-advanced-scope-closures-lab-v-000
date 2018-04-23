function produceDrivingRange(drivingRange){
  return function(distance){
    return drivingRange >= distance;
  }
}

function produceTipCalculator(percentTip){
  return function(bill){
    return bill * percentTip;
  }
}
