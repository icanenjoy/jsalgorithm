function solution(n) {
    let num =[];
    let bool = 1;
    for(let i=3;i<=n;i+=2){
        for(let j=0;j<num.length;j++){
            if(i%num[j]==0){
                bool = 0;
                break;
            }
        }
        if(bool){
            num[num.length] = i;
            
        }
        bool = 1;
    }
    if(n>1) num[num.length] = 2;
    return num.length;
}


function solution2(n) {
    let num=[];
    for(let i=2;i<=n;i++){
        num[num.length]=i;
    }
    for(let j=0;j<num.length;j++){
        let k = num[j]
        for(let l=1;l<=num.length;l++){
            if(num[j+l]%num[j]==0) num.splice(j+l, 1)
        }
    }
    return num.length;
    
}