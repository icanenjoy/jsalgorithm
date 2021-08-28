function solution(n) {
    var answer = -1;
    for(var i=2; i*i<=n;i++){
        if(n===i*i)
            answer = (i+1)*(i+1);
    }
    if(n===1)
        answer = 4;
    return answer;
}