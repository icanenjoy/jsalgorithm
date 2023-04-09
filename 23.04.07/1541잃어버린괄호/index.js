let a = require('fs').readFileSync('test.txt').toString().trim().split("-");
//-를 기준으로 쪼갠다. -뒤에 값을 전부 더해서 빼버리면 최소값
let result = 0;
let first = 1;
for (let i = 0; i < a.length; i++) {
    const nums = a[i].split("+"); //숫자쪼개기
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
        sum += parseInt(nums[j]); //각 숫자 더하기
    }

    if (first) { //다 더하고 +이면
        result = sum;
        first = 0; // -로 바꾸기
    } else {
        result -= sum;
    }
}
console.log(result);