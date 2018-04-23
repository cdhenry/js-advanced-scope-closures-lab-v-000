function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let distance = Math.abs(parseInt(endingBlock) - parseInt(startingBlock));
    let difference = Math.abs(distance - blockRange);
    if (distance > blockRange) {
      return `${difference} blocks out of range`
    }else{
      return `within range by ${difference}`
    }
  }
}

function produceTipCalculator(percentTip) {
  return function(bill) {
    return bill * percentTip;
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
