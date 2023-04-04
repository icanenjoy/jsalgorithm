let ans = Array(10001).fill(true); //모두 true 배열 만들기
for(let i=1;i<=10000;i++){
    let sum = i;   //처음값
    let n = i;
    while(n>0){   //자리수가 남지 않을 때까지 반복
        sum += n%10;   //끝 자리수 더해주기
        n = Math.floor(n/10); // 끝자리 없애기
    }
    if(sum <=10000){ 
        ans[sum] = false; // 생성자 i가 만든 숫자sum을 배열에서 없애준다.
    }
}

for (let i=1;i<=10000;i++){
    if(ans[i]){ //남은 true 셀프 넘버를 출력한다.
        console.log(i);
    }
}
