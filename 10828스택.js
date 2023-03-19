const [arr,...a] = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let ans = [];
for(let i=0;i<a.length;i++){
    if(a[i][0]==="t"){
        if(!ans){
            console.log("top-1");
        }else{
            console.log("top"+ans[ans.length-1]);
        }
    }else if(a[i][0]==="s"){
        console.log(ans.length);
    } else if(a[i][0]==="e"){

        if(ans) console.log("empty0");
        else console.log("1");

    } else if(a[i][1]==="u"){  //push
        let pu = a[i].toString().trim().split(' ');
        ans.push(pu[1]);
    }else if(a[i][0]==="p"&& a[i][1]==="o"){
        if(!ans){
            console.log("-1");
        }else{
            console.log(ans.pop());
        }
    }
} //ans에 답넣고 출력