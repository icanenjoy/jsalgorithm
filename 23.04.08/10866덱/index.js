const [len,...a] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let deque = []; 
let answer = []; 
for(let i=0;i<len;i++){
    if(a[i].includes("push_front")) deque.unshift(a[i].split(' ')[1]);
    else if(a[i].includes("push_back")) deque.push(a[i].split(' ')[1]);
    
    else if(a[i].includes("pop_front")){ deque.length===0 ? answer.push("-1") : answer.push(deque.shift()); }
    else if(a[i].includes("pop_back")){ deque.length===0 ? answer.push("-1") : answer.push(deque.pop()); }
    
    else if(a[i].includes("size")) answer.push(deque.length);
    
    else if(a[i].includes("empty")) deque.length===0 ? answer.push("1") : answer.push("0");
    
    else if(a[i].includes('front')) deque.length===0 ? answer.push("-1") : answer.push(deque[0]);
    else if(a[i].includes('back')) deque.length===0 ? answer.push("-1") : answer.push(deque[deque.length-1]);
}

console.log(answer.join("\n"));
