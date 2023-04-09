let [a,...money] = require('fs').readFileSync('test.txt').toString().trim().split("\n");
let [n, k] = a.split(" ").map(Number);//n종류 총액 k
money = money.map(Number);

let ans = 0;

for (let i = n - 1; i >= 0; i--) {
    ans += Math.floor(k / money[i]); //k원을 주어진 지폐로 나눈다.
    k %= money[i]; //나머지
}

console.log(ans);