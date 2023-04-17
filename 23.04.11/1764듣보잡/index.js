const [N,...names] = require("fs").readFileSync('test.txt').toString().trim().split("\n");
const [n, m] = N.split(" ").map(Number);

const ans = [];
let ansNum = 0;
/*
  for(let i=0;i<n;i++){
  let listen = names[i]; //듣도 못한 사람
  for(let j=0;j<m;j++){
    let look = names[n+j]; //보도 못한 사람
    if(listen===look){ //듣도 보도 못한 사람
      ans.push(listen);
      ansNum++;
    }
  }
}*/

const map = new Map();
for (let i =0;i<n;i++){
  map.set(names[i],true);
}
for(let j=0;j<m;j++){
  if(map.has(names[n+j])) {
    ans.push(names[n+j]);
    ansNum++;
  }
}
console.log(ansNum);
ans.sort();
console.log(ans.join("\n"));
