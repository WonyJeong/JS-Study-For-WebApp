function solution(bridge_length, weight, truck_weights) {
  var wait = truck_weights.slice();
  var onBridge = [];
  var _onBridge = [];
  var pass = [];
  var t = 0;
  var currentWeights = 0;

  while (
    wait.length !== 0 ||
    onBridge.length !== 0 ||
    pass.length !== truck_weights.length
  ) {
    t++;
    var _onBridge = _onBridge.map(value => value + 1);

    if (_onBridge.length !== 0 && _onBridge[0] > bridge_length) {
      var temp = onBridge.shift();
      currentWeights -= temp;
      pass.push(temp);
      _onBridge.shift();
    }

    if (wait.length !== 0) {
      const temp = wait[0];
      if (temp + currentWeights <= weight) {
        currentWeights += temp;
        onBridge.push(wait.shift());
        _onBridge.push(1);
      }
      console.log("--------------------");
      console.log("Current Time : " + t);
      console.log("Wait : " + wait);
      console.log("On Bridge : " + onBridge);
      console.log("Time : " + _onBridge);
      console.log("Pass : " + pass);
    }
  }

  return t;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));
//return value is 8
