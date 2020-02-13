function solution(arr, divisor) {
  var temp = arr.filter(value => value % divisor === 0).sort((a, b) => a - b);
  return temp.length !== 1 ? temp : [-1];
}

const arr = [5, 9, 7, 10];
const divisor = 5;
console.log(solution(arr, divisor));
