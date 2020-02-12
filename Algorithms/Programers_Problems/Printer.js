function solution(priorities, location) {
  var i = 0;
  var len = priorities.length;
  var cursor = new Array(priorities.length);

  cursor.fill(0);
  cursor[location] = 1;

  while (i !== priorities.length) {
    const maxValue = Math.max(...priorities.slice(i, len));
    if (priorities[i] < maxValue) {
      var temp = priorities[i];
      priorities.splice(i, 1);
      priorities.push(temp);
      var temp = cursor[i];
      cursor.splice(i, 1);
      cursor.push(temp);
    } else {
      i++;
    }
  }
  return cursor.indexOf(1) + 1;
}

console.log(solution([2, 1, 3, 2]), 2);

function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some(t => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
