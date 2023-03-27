const [arr,...a] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let ans = []; //push등등 기능들의 배열
let answer = []; // 출력되는 답들의 모음
for(let i=0;i<a.length;i++){
    if(a[i].includes("push")){ 
        let pu = a[i].toString().trim().split(' '); //push와 숫자를 쪼개기 위해
        ans.push(pu[1]); // 뒤에 숫자부분을 push
    }else if(a[i].includes("pop")){
        if(ans.length===0){ //정수가 없는 경우를 비교 ans를 넣어서 해봤는데 undefined가 pop됨. 
            answer.push("-1");
        }else{
            answer.push(ans.shift()); //ans[0].pop했더니 안되서 바꿈
            //ans.reverse(); //ans.reverse().pop().reverse();가 한번에 안되서 나눔. shift()앞에삭제 unshift()앞에추가
        }
    }else if(a[i].includes("size")){
        answer.push(ans.length);
    
    }else if(a[i].includes("empty")){
        if(ans.length===0) answer.push("1");
        else answer.push("0");
    
    }else if(a[i].includes('front')){
        if(ans.length===0){
            answer.push("-1");
        }else{
            answer.push(ans[0]);
        }
    
    }else if(a[i].includes('back')){
        if(ans.length===0){
            answer.push("-1");
        }else{
            answer.push(ans[ans.length-1]);
        }
    
    } 
}

console.log(answer.join("\n"));

//배열에 빈거는 길이로 확인