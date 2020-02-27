const sortArray = (index, arr) => {
    var str = "";
    var find_Max_len = arr.map(function(str) {
      return str.length;
    })
  
    var maxlen = Math.max.apply(null,find_Max_len);
    
    var ith_Arr = [];
    
    var tempArr = arr;
    for(var i =0; i< arr.length ; i++){
      var itemLen = arr[i].length;
      var tail = String(arr[i]);
      while(itemLen < maxlen){
          tail += String(index);
      }
      
        var tempObj = {
        realValue : 
      }
    }
    
    
    console.log(find_Max_len);
    return str;
  }
  
  
  const solution = numbers => {
    //Allocation 2D Array & answer String
    var answer = "";
    var arr = [];
    for (var i = 1; i < 10; i++){
      arr[i] = new Array();
    }
    
    //Set Numbers Tree
    for(var i = 0; i<numbers.length; i++){
      var temp = String(numbers[i]);
      arr[temp[0] * 1].push(temp);  
    }
    
    for(var i = 9; i > 0; i--){
      if(arr[i].length !== 0){
        answer += sortArray(i, arr[i]);
      }
    }
  
  
    return 0;
  };
  
  const numbers = [3, 30, 34, 5, 9];
  console.log(solution(numbers));
  