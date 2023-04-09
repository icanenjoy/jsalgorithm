const [a,b] = require('fs').readFileSync('test.txt').toString().trim().split(" ").map(Number);
let ans = [];

ans.push(a+b);
ans.push(a-b);
ans.push(a*b);
ans.push(Math.floor(a/b));
ans.push(a%b);

console.log(ans.join("\n"));