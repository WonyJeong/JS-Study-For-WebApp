//my solution
function solution(s) {
    var temp = s.split('');
    var len = temp.length;
    if (len === 4 || len === 6) {
        temp = temp.filter(val => !isNaN(val));
        return len === temp.length ? true : false;
    }
    return false;
}
//best solution
function alpha_string46(s) {
    //정규식
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}


console.log(solution("12311"));