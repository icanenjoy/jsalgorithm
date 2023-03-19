const num = require('fs').readFileSync('test.txt').toString();
let ans = [];
for(let i=num;i>0;i--){
    for(let j=i;j>0;j--)
        ans+= "*";
    ans += "\n";
}
console.log(ans);