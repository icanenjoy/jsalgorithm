const [num,...a] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
let check = a[a.length-1];
let ans = 1;

for (let i=a.length-2;i>=0;i--){

    if(parseInt(a[i])>check){
            check = a[i];
            ans++;
    }
}

console.log(ans);