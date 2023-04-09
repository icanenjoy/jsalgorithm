let [a,b] = require('fs').readFileSync('test.txt').toString().split(" ");
if(a>b){
    let i = a;
    a = b;
    b = i;
}

if(a===b){
    console.log(a);
}else{
    console.log((a+b)*(b-a+1)/2);
}