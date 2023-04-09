let n = require('fs').readFileSync('test.txt').toString().trim().split().map(Number);

let result = -1; //안될때 결과값

for(let i=0;i<=n/3;i++){ //3의 최소값 -> 점점 늘어남
  let j = (n-i*3)/5; //5의 최대값 -> 점점 줄어듦
  if(j===parseInt(j)){ //j의 값이 나누어 떨어지면
    result = i+j; //3의 최소 봉지값 + 5의 최대 봉지값
    break;
  }
}
console.log(result);
