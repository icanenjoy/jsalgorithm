/*let [a,b] = require('fs').readFileSync('test.txt').toString().split(" ");
let ans = [];
ans[0]=parseInt(a[0])+parseInt(b[0]);
for(let i=1;i<a.length;i++){
    if(parseInt(a[i])+parseInt(b[i])>=10){
        ans[i-1]++;
        ans[i]=parseInt(a[i])+parseInt(b[i])-10;
    }else{
        ans[i]=parseInt(a[i])+parseInt(b[i]);
    }
}
console.log(ans.join(''));*/


let [a,b] = require('fs').readFileSync('test.txt').toString().split(" ");
let ans = BigInt(a)+BigInt(b);
console.log(ans.toString());
