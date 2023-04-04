function solution(x) {
    var answer = true;
    var a = x.toString().split('').reduce((a,b)=>parseInt(a)+parseInt(b),0);
    if(x%a==0)
        answer=true;
    else
        answer = false;
    return answer;
    
}