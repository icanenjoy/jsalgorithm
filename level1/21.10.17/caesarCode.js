function solution(s, n) {
    var answer='';
    for(let i=0;i<s.length;i++){
        if(s[i]==' '){
            answer += ' ';
            continue;
        }
        else{
            if(s.charCodeAt(i)<91&&s.charCodeAt(i)+n>90){
                    answer = answer+String.fromCharCode(s.charCodeAt(i)+n-26);
            }
            else if(s.charCodeAt(i)>96&&s.charCodeAt(i)+n>122){
                answer = answer+String.fromCharCode(s.charCodeAt(i)+n-26);}
            else
                answer = answer+String.fromCharCode(s.charCodeAt(i)+n);
        }
    }
    answer.toString();
    return answer;
}