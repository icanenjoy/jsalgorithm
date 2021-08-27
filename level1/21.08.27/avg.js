function solution(arr) {
    var answer = 0;
    var len = arr.length;
    var all = arr.reduce((a, b)=> a+b,0);
    answer = all/len;
    return answer;
}