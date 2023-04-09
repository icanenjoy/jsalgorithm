/* 중요도 ->중요도가 높은 문서가 있으면 Q뒤에 배치 아니면 인쇄
3 //테스트케이스
1 0 //1개의 문서, 궁금한 문서는 0번째에 놓여있고
5 //문서들의 중요도
4 2 //4개의 문서, 궁금한 문서는 2번째에 놓여있고
1 2 3 4 // 4개 문서의 중요도
6 0 //6개의 문서, 궁금한 문서는 0번째에 놓여있고
1 1 9 1 1 1 // 각 문서의 중요도

1 // 첫번째로 인쇄
2 // 중요도 3 -> 2번째로 인쇄
5 // 
 */

let [n, ...data] = require('fs').readFileSync('test.txt').toString().trim().split("\n");
let ans = [];
for(let i=0;i<n;i++){
    let [num, position] = data[i*2].split(" ").map(Number); 
    let seq = data[i*2+1].split(" ").map(Number);
    if(num===1) ans.push(1);
    
    else{
        let answer = 0;
        
        let impor = seq[position];
        while(impor<Math.max(...seq)){
            if(seq[0]===Math.max(...seq)){
                seq.shift();
                position--;
                answer++;
                num--;
            }else{
                let last = seq.shift();
                seq[num-1]= last;
                position--;
            }
            if(position<0)
            position += num;

        }while(1){
            if(seq[0]<seq[position]){
                seq.shift();
                position--;
            }else if(position===0){
                answer++;
                break;
            }else if(seq[0]===seq[position]){
                seq.shift();
                answer++;
                position--;
                
            }
        }
        ans.push(answer);
    }
    
}

console.log(ans.join("\n"));