const solution = (arr, location) => {
  var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < 11; i++) {
    data[arr[i]]++;
  }

  return 0;
};

const arr = [2, 1, 3, 2];
const location = 2;
console.log(solution(arr, location));
