let num = require('fs').readFileSync('test.txt').toString();
num = parseInt(num);
let first =1;
let second =1;
let check =1;

while(check<num){
    if((first+second)%2===0){
        second++;
        check++;
        while(second>1){
            first++;
            second--;
            check++;
        }
        continue;
    }else{
        first++;
        check++;
        while(first>1){
            first--;
            second++;
            check++;
        }
        continue;
    }
}
console.log(first+"/"+second);