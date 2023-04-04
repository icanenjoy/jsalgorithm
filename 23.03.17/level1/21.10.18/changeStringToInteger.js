function solution(s) {
    var answer = 0;
    if(s[0]=='-'||s[0]=='+'){
        for(let i=1;i<s.length;i++){
            answer += parseInt(s[i])*(10**(s.length-i-1));
        }
        if(s[0]=='-')answer = answer*(-1);
    }
    else{
        for(let j=0; j<s.length;j++){
            answer += parseInt(s[j])*(10**(s.length-j-1));
        }
    }
    return answer;
}



// function strToInt(str){
//     return str/1
//     }