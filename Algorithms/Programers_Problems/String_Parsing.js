//단순한 문제이다.
//매개변수로 주어진 +, - 기호 와 함께 주어진 숫자 문자열 값을 (ex : -123, +123, 123) 을 정수형으로 반환하는 문제이다.
//my solution
function solution(s) { 
    var temp = s.split('');
    var flag = true;
    if (isNaN(s[0])){
      temp.shift();
      if (s[0] === '-')
        flag = false;
    }
      return flag 
      ?  Number(temp.join('')) 
      : -1 * Number(temp.join(''));
}
//위 코드는 먼저 주어진 문자열을 각각 나누어 문자 배열로 만든 후, 첫 문자가 연산기호인지 판단한 후에 값을 출력해주는
//매우 효율적이지 못한, 그나마 C계열 언어에서는 봐줄만한 코드였다.
//하지만 동적언어인 자바스크립트의 기능을 최대한 활용하면 다음과 같은 코드로 구현이 가능하기도 하다.
//이는 문자열로 이루어진 값을 사칙연산 후  자동으로 정수형으로 파싱이 되는 원리를 이용한 것이다.
//주어진 조건, 부호(+,-) 와 숫자 외 문자가 입력되지 않는 것을 가장 적절히 이용한 것
function strToInt(str){
    return str/1
    //return +str
}
