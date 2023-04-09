let [len,a,b] = require('fs').readFileSync('test.txt').toString().trim().split("\n");
len = parseInt(len);
a = a.split(" ").map(Number);
b = b.split(" ").map(Number);
// b재배열 안되도 a가 되니까 그냥 짝 맞추면 됨 가장큰값*가장작은값이 가장 작은값임

a.sort((x, y) => x - y); //오름차순
b.sort((x, y) => y - x); //내림차순
let result = 0;
  
for (let i = 0; i < len; i++) {
    result += a[i] * b[i]; //곱해서 더함
}
  console.log(result);