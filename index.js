function produceDrivingRange(drivingRange){
  return function(distance){
    return drivingRange > distance;
  }
}
