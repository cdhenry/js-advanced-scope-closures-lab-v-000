function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
    let distance = Math.abs(parseInt(endingBlock) - parseInt(startingBlock))
    if (distance > blockRange) {
      return `${distance} blocks out of range`
    }else{
      return `withing range by ${distance}`
    }
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
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  }
}
