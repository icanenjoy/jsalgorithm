let [n,k] = require('fs').readFileSync('test.txt').toString().trim().split(" ").map(Number);
let ans = Array(n).fill(true);
let answer = [];
let check = 0;

for(let i = 0; i < n; i++){
    let j=0;
    while(j<k){
        if(check>=n){
            check -=n;
        }
        if(ans[check]===true){
            check++;
            j++;
        }else{check++;}
    }
    check--;
    answer.push(check+1);
    ans[check] = false;
}
console.log("<"+answer.join(", ")+">");