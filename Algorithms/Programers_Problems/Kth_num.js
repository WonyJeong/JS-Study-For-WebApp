//My solution
function solution(array, commands) {
    var answer = [];
    for(var i =0; i<commands.length;i++){
      var temp = commands[i];
      var list = array.slice(temp[0]-1, temp[1]).sort((a,b) =>{return a-b});
      answer.push(list[temp[2]-1]);
    }
    return answer;
}

//Best Solution
function bestSolution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}

//sample
solution([1, 5, 2, 6, 3, 7, 4],[[2,5,3],[4,4,1],[1,7,3]]);

//result : print [5,6,3]