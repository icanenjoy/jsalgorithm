const num = require('fs').readFileSync('test.txt').toString();
let first = 0;
let second =1;
let third = 1;
for(let i=1;i<num;i++){
    third = first+second;
    first = second;
    second =third;
}
console.log(second);