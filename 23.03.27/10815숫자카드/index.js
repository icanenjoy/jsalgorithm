let [mylen,mycard,youlen,youcard] = require('fs').readFileSync('test.txt').toString().split("\n");
/*1차시도 - 결과가 뒤죽박죽
mycard = mycard.split(" ").map(Number).sort();
youcard = youcard.split(" ").map(Number).sort();*/
/*2차시도 - 런타임에러
mycard = new Set(mycard.split(" ").map(Number)); ---> Set -> 중복값 제거, has로 값 가졌는지 boolen으로 반환
youcard = youcard.split(" ").map(Number);*/
mycard = mycard.split(" ").map(Number).sort((a, b) => a - b);
youcard = youcard.split(" ").map(Number);

/*1차시-결과 개판
for(let i=0;i<youlen;i++){
    for(let j=check;j<=mylen;j++){
        if(j===parseInt(mylen)){
            ans.push("0");
            break;
        }else if(mycard[j]===youcard[i]){
            ans.push("1");
            check = j;
            break;
        }
    }
}*/
/* 런타임에러
for(let i=0;i<youlen;i++){
    if(mycard.has(youcard[i])) 
        ans.push("1");
    else ans.push("0");

}*/
let ans = "";
const binarySearch = (arr, val) => { // 내카드와 비교할 카드 받음
    let start = 0; //시작
    let end = arr.length - 1; // 끝
    let middle = Math.floor((start + end) / 2); //중간
    while (arr[middle] !== val && start <= end) { //내카드는 정렬되어 있으니 
      if (val < arr[middle]) end = middle - 1; // 내카드 중간값보다 작으면 끝값을 중간으로 땡김
      else start = middle + 1; // 그게 아니라면 중간값을 시작값으로 땡김
      middle = Math.floor((start + end) / 2); // 시작과 끝이 바뀐 상태에서 다시 쪼개기
    }
    return start > end ? 0 : 1; // 다 쪼갰을 때 시작 값이 없는 건 카드가 없는거 0, 아니라면 1
  };

youcard.forEach((card) => {
    ans += binarySearch(mycard, card)+" ";
});
console.log(ans);