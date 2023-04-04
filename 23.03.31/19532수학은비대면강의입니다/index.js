let [ax,by,c,dx,ey,f] = require('fs').readFileSync('test.txt').toString().trim().split(" ").map(Number);
/*const ax2 = ax;
const by2 = by;
let ansX = 0;
let ansY = 0;
if(ax===0){
    ansY = c/by;
    ansX = (f-(ey*ansY))/dx;
}else if(dx===0){
    ansY = f/ey;
    ansX = (c-(by*ansY))/dx;
}else if(by===0){
    ansX = c/ax;
    ansY = (f-dx*ansX)/ey;
}else if(ey===0){
    ansX = f/dx;
    ansY = (c-ax*ansX)/by;
}else{
    ax = ax*dx;
    by = by*dx;
    c = c*dx;
    dx = dx*ax2;
    ey = ey*ax2;
    f = f*ax2;
    ansY = (c-f)/(by-ey);
    ansX = (c-(ansY*by))/ax;
}*/
/*
const ansx = (c * ey - by * f) / (ax * ey - by * dx);
const ansy = (c * dx - ax * f) / (by * dx - ax * ey);
console.log(ansx, ansy);*/

for(let i=-999;i<1000;i++){ // 그냥 냅다 돌리기 브루투포스~
    for(let j = -999;j<1000;j++){
        if(ax*i+by*j===c && dx*i+ey*j===f){
            console.log(i, j);
        }
    }
}




