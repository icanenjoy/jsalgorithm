let [a,nums] = require('fs').readFileSync('test.txt').toString().split("\n");
let [len, check] = a.split(" ").map(Number);
nums = nums.split(" ").map(Number);
let ans = 0;
let sum = nums[0];
let start =0;
let end =0;

/* 1차시도 - 이런식으로 하면 끝이 없네 다른 방법 필요해
for(let i =0;i<len-1;i++){
    if(nums[i]+nums[i+1]===check){
        ans +=1;
    }else if(nums[i]+nums[i+1]<check){
        if(nums[i]+nums[i+1]+nums[i+2]===check){
            ans +=1;
        }else if(nums[i]+nums[i+1]+nums[i+2]<check){
            
        }
    }
}*/
while(end<len){
    if(sum===check){
        ans++;
        sum +=nums[++end];
    } else if (sum < check) {
        sum += nums[++end];
    } else if (sum > check) {
        sum -= nums[start++];
    }
}
console.log(ans);