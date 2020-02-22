const scoring = (arr, answer) => {
  var temp = 0;
  const len = arr.length;
  for (var i = 0; i < len; i++) if (answer[i] === arr[i % len]) temp++;
  return temp;
};

const solution = answers => {
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  var answer = [];
  for (var i = 0; i < 3; i++) {
    const temp = arr[i];
    
    answer.push(scoring(arr[i], answers));
  }

  return answer;
};

//const answers = [1, 2, 3, 4, 5];
const answers = [1, 3, 2, 4, 2];
console.log(solution(answers));


var temp = arr.map(value , maxValue) => value === maxValue ? value : maxValue )
