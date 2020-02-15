function solution(n) {
  var answer = "";
  var num = n;
  while (num != 0) {
    var quo = Math.floor(num % 3);
    quo = quo === 0 ? 3 : quo;
    num = (num - quo) / 3;
    var lem = quo == 3 ? 4 : quo;
    answer = lem + answer;
  }
  return Number(answer);
}
