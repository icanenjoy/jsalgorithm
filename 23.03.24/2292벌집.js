let num = require('fs').readFileSync('test.txt').toString();
num = parseInt(num);
let ans =0;
let k = 0;
if(num===1)
    console.log("1");
else if(1<num&&num<8)
    console.log("2");
    
else{
    let len = (num-1)/6;
    for(let i=0;ans<len;i++){
        ans +=i;
        k = i+1;
    }
    console.log(k);
}