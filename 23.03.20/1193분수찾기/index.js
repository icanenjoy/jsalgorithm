let num = require('fs').readFileSync('test.txt').toString();
num = parseInt(num);
let depth =0;
let sum =0;
let first = 0;
let second = 0;
for(let i=1;sum<num;i++){
    sum += i;
    depth = i;
}
if(num===1){
    console.log("1/1");
}else{
    num = num-sum+depth; 

    if(depth%2===0){
        second= depth+1-num;
        first = num;
    }else{
        first =  depth+1-num;
        second =num;
        
    }
    console.log(first +"/"+ second);
}
/*1차시도 망함
while(check<num){
    if((first+second)%2===0){ //1/1, 1/3, 1/5일때는 왼쪽으로 타고 올라감
        second++;
        check++;
        while(second>1){
            first++;
            second--;
            check++;
        }
    }else{ // 2/1, 4/1, 6/1일때는 오른쪽으로 타고 올라감
        first++;
        check++;
        while(first>1){
            first--;
            second++;
            check++;
        }
    }
    console.log(first+"/"+second);
}
console.log(first+"/"+second);

//ctrl+d 같이변경 가능~*/

