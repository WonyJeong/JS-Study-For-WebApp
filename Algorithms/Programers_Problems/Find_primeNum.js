function solution(n) {
    var answer = 0;
    var array = new Array(n+1);
    array.fill(true);
    for(var i = 2; i < n+1; i++){
      if(array[i]){
          answer++;
        for(var j = 2*i; j < n+1; j+=i){
          array[j] = false;
        }
      }
    }
    return answer;
}

