let [nm, location] = require('fs').readFileSync('test.txt').toString().trim().split("\n");
let [n, m] = nm.split(" ").map(Number);
location = location.split(" ").map(Number);


let ans = 0;
const arr = Array(n).fill(true);


let nowlocation = 0; 


while(m !== 0){
    let left = 0;
    let right = 0;
    let nowlocation2 = nowlocation;

    while(nowlocation !== location[0]-1){ //오른쪽 거리 구하기
        if(arr[nowlocation]===true){ 
            right++;
        }
        nowlocation++;
        if(nowlocation>=n)
            nowlocation-=n;
    }
    while(nowlocation2 !== location[0]-1){ //왼쪽 거리 구하기
        if(arr[nowlocation2]===true){
            left++;
        }
        nowlocation2--;
        if(nowlocation2<0)
            nowlocation2+=n;
    }

    arr[location[0]-1] = false; //값 빼기
    ans += Math.min(right,left); //오른쪽 왼쪽 짧은 거리 선택
    nowlocation = location.shift(); //다음 목표 설정
    m--; //뽑아야 하는 수 나머지
}
console.log(parseInt(ans));


//예시는 다 맞는데 왜..?


