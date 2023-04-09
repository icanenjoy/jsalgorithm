const str = require('fs').readFileSync('test.txt').toString().trim().split("\n");
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}