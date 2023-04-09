let n =require('fs').readFileSync('test.txt').toString().trim();
ans = [];
n = parseInt(n);
for(let i=0;i<n;i++){
    ans[i] = i+1;
}
let i=0;
while(true){
    i++;
    ans[n+i-1] = ans[i*2-1];
    if(ans[n+i]===ans[n+i-1]) break;
}

console.log(ans[n+i-2]);