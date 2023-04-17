const [num,...ropes] = require('fs').readFileSync('test.txt').toString().trim().split("\n").map(Number);
ropes.sort((a, b) => a-b); //정렬
let maxans = 0;
for(let i=0; i<num; i++){
    let ans = ropes[i]*(num-i); //작은 수*로프 수
    if(maxans<ans) maxans = ans; // 큰 값 저장
}
console.log(maxans);