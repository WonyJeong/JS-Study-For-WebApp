//My solution
function solution(arr)
{
  var answer = []; 
  var temp = arr[0];
  answer.push(temp);
  for(var i = 1; i<arr.length; i++){
    if(temp != arr[i])
      answer.push(arr[i]);
    temp = arr[i];
  }
    console.log(answer);
    return answer;
}
//Best Solution
// filter 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듭니다.

//bestSolution 에서는, filter 함수를 통해 새로운 arr를 구성하여 값을 반환하였음
//filter의 매개변수로, (val,index)를 입력하였고, 현재 값을 다음 index값과 비교하여, 같으면 filtering하지 않고, 다른 경우에 
//새롭게 구성될 arr의 값으로 push 하였음.
function bestSolution(arr){
    return arr.filter((val,index) => val != arr[index+1]);
}

const arr = [1,1,3,3,0,1,1];
solution(arr)