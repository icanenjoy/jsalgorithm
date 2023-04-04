function solution(arr) {
    var answer = [];
    let place = 0;
    if(arr.length===1){
        answer[0] = -1;
        return answer;
    }
    
    for(var i=1; i<arr.length;i++){
        if(arr[place]>arr[i])
            place = i;
    }
    answer = arr.filter(num => num !== arr[place])
    return answer;
}