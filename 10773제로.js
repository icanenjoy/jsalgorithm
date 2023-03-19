const [arr,...money] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let ans =[];
let answer =0;
for(let i=0;i<money.length;i++){
    if(parseInt(money[i])===0){
        ans.pop();
    }else{
        ans.push(money[i]);
    }
}
for(let i=0;i<ans.length;i++){
    answer += parseInt(ans[i]);
}
console.log(answer);