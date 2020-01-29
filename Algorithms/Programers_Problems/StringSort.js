//문자열 정렬
//split 는 문자열을 매개변수 단위로 끊어 배열형태로 새로 저장함.
// "abc,def,ghi".split(',')  => abc, def, ghi
function solution (s){
    return s.split('').sort().reverse().join();
}

console.log(solution("something"));