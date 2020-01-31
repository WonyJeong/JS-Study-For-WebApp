// 자바스크립트 배열 객체의 내장 함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링할 수 있다.
// map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 
// 그 결과로 새로운 배열을 생성한다.
// arr.map(callback , {thisArg})

var number = [1,2,3,4,5];
var processed = number.map( num =>{
    return num * num
})

console.log(processed);