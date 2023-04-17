const [n, ...times] = require("fs").readFileSync('test.txt').toString().trim().split("\n");

const N = Number(n);
const T = [];
const P = [];
for (let i = 0; i < N; i++) {
  const [t, p] = times[i].split(" ").map(Number);
  T.push(t);
  P.push(p);
} // 배열에 정리

let maxProfit = 0; //최대 수익
function dfs(day, profit) {
  if (day >= N) { // 퇴사일이 지나면
    maxProfit = Math.max(maxProfit, profit); // 최대 수익
    return;
  }

  // 상담을 하는 경우
  if (day + T[day] <= N) {
    dfs(day + T[day], profit + P[day]);
  }

  // 상담을 하지 않는 경우
  dfs(day + 1, profit);
}

dfs(0, 0); //초기값
console.log(maxProfit);