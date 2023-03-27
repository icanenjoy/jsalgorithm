const [arr,...a] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let ans = [];
let answer = [];

for(let i=0;i<a.length;i++){
    if(a[i].includes('top')){
        if(ans.length===0){
            answer.push("-1");
        }else{
            answer.push(ans[ans.length-1]);
        }
    
    }else if(a[i].includes("size")){
        answer.push(ans.length);
    
    } else if(a[i].includes("empty")){

        if(ans.length===0) answer.push("1");
        else answer.push("0");

    } else if(a[i].includes("push")){ 
        let pu = a[i].toString().trim().split(' ');
        ans.push(pu[1]);
    
    }else if(a[i].includes("pop")){
        if(ans.length===0){
            answer.push("-1");
        }else{
            answer.push(ans.pop());
        }
    }
}

console.log(answer.join("\n"));