function solution(n) {
    var answer = 0;
    answer = parseInt(n.toString().split('').sort().reverse().join(''));
    return answer;
}