let [a,b] = require('fs').readFileSync('test.txt').toString().split(" ");
if(a>b){
    let i = a;
    a = b;
    b = i;
}
let ab= parseInt(a)+parseInt(b);
let bb= (b-a+1)/2;
console.log(ab*bb);//잘만나오는데..