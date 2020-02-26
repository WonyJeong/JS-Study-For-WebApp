const solution = numbers => {
  var arr = new Array(10);
  var nums = numbers.splice(val => String(val));
  for (var i = 0; i < nums.length; i++) {
    var index = nums[i];
    console.log(index + 5);
    //arr[index].push(nums[i]);
  }

  for (var i = 1; i < 10; i++) {
    console.log(" i : " + i + " => " + nums[i]);
  }

  return nums;
};

const numbers = [3, 30, 34, 5, 9];
console.log(solution(numbers));
