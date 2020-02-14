function solution(n) {
  var answer = "";
  var num = n;
  while (num != 0) {
    quo = Math.floor(num % 3);
    quo = quo === 0 ? 3 : quo;
    num = (num - quo) / 3;
    lem = quo == 3 ? 4 : quo;
    answer = lem + answer;
  }
  return answer;
}

for (var i = 1; i < 21; i++) {
  console.log(i + " : " + solution(i));
}
