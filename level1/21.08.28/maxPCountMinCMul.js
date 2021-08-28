function solution(n, m) {
    var answer = [];
    var max =1;
    var min = n*m;
    for(var i=2;i<=m;i++){
        if(n%i==0&&m%i==0){
            max=i;
        }
    }
    answer[0] = max;
    for(var i=min;i>=m;i--){
        if(i%n==0&&i%m==0)
            min=i;
    }
    answer[1] = min;
    return answer;
}