let [a,b,v] = require('fs').readFileSync('test.txt').toString().split(" ");
let oneday = parseInt(a)-parseInt(b);
v -= b;
console.log(Math.ceil(v/oneday)); //5 1 6 1.25나옴