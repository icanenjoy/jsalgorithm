function solution(s) {
    var answer = '';
    var boo = true;
    for(var i=0; i<s.length;i++){
        if(s[i]===' '){
            answer += ' ';
            boo = true;
            continue;
        }
        if(boo){
            answer += s[i].toUpperCase();
            boo = false;
        }
        else{
            answer += s[i].toLowerCase();
            boo = true;
        }
    }
    
    return answer;
}