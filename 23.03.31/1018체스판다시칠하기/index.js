const [len, ...board] = require('fs').readFileSync('test.txt').toString().trim().split("\n");
const [width, height] = len.split(" ");

let ans = 65;
for(let i = 0; i <= width-8; i++){ // width 시작점들
    for(let j = 0; j <= height-8; j++){ // height 시작점들
        let count = 0; //다시 칠해야 하는 갯수
        for(let x = i; x < i+8; x++){ //i시작점부터 8칸
            for(let y = j; y < j+8; y++){ //j시작점부터 8칸
                if((x+y) % 2 === 0){ //짝수자리는 W
                    if (board[x][y] !== "W"){
                        count++;
                    }
                }else{ // 홀수자리 B
                    if(board[x][y] !== "B"){
                        count++;
                    }
                }
            }
        }
        if(count <ans){ //count가 작으면 최소값 바꾸기
            ans = count;
        }
        count = 0;
        for(let x = i; x < i+8; x++){ //i시작점부터 8칸
            for(let y = j; y < j+8; y++){ //j시작점부터 8칸
                if((x+y) % 2 !== 0){ //홀수자리는 W
                    if (board[x][y] !== "W"){
                        count++;
                    }
                }else{ // 짝수자리 B
                    if(board[x][y] !== "B"){
                        count++;
                    }
                }
            }
        }
        if(count <ans){ //count가 작으면 최소값 바꾸기
            ans = count;
        }
    }
}
console.log(ans);