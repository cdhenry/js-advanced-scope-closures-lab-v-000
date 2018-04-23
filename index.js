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

function createDriver(){
  let driverId = 0

  return class {
    constructor(){
      this.id = ++driverId;
    }
  }
}
