const [high, width] = require('fs').readFileSync('test.txt').toString().trim().split(" ").map(Number);
//말의 진행방향이 오른쪽을 향함
let ans = 0;
if (high === 1) { //갈 수 있는 곳이 없음
    ans = 1;
} else if (high === 2) { //2,3 반복 3,5,7,9로 나아감 / 방문칸이 5개이상부터는 골고루 움직여야하기 때문에 최대 방문칸은 4.
    ans = Math.min(4, Math.ceil(width/2)); //width 2면 1, width 3-2, 4-2, 5-3,
} else {
    if (width < 7) { //high가 최소3이므로 1,4반복 한칸씩 증가됨 
      ans = Math.min(4, width); //width 2 일번이동 2칸, width 3 사번 이동 3칸...  / 마찬가지로 5칸이상은 골고루 움직여야 해서 최대 방문칸은 4. 
    } else { //1,2,3,4번 다쓰면 high3,width7이상 필수. 1~4번 한번씩 사용 후 1,4반복하면 1씩만 이동. 3,7기준 이동은 5이고 이후 1씩 증가하므로 width-2
      ans = width - 2; 
    }
}

console.log(ans);