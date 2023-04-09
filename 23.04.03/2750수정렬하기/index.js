let [len,...nums] = require('fs').readFileSync('test.txt').toString().trim().split("\n").map(Number);
let temp =0;
let mergeNums = [];
let quickNums = [];
let heapNums = [];
for (let i = 0; i<nums.length;i++){
    mergeNums.push(nums[i]);
    quickNums.push(nums[i]);
    heapNums.push(nums[i]);
}

function mergeSort(mergeNums, left, right) {
    if(left<right){ //같거나 바뀌면 끝
        let mid = Math.floor((left+right)/2); 

        mergeSort(mergeNums, left, mid); //왼쪽
        mergeSort(mergeNums, mid+1, right); //오른쪽
        merge(mergeNums, left, mid, right);
    }
    return mergeNums;
}

function merge(mergeNums, left, mid, right){
    let ans = [];
    let i=left; //왼쪽시작
    let j=mid+1; //오른쪽시작
    let k=0;
    while(i<=mid && j<=right){ //j<right로 하니까 계속 이상한 답 나왔음
        if(mergeNums[i]<=mergeNums[j]){
            ans[k] = mergeNums[i++];
            k++;
        }else {
            ans[k++] = mergeNums[j++];
        }
    }
    while(i<= mid){
        ans[k++] = mergeNums[i++];
    }
    while(j<=right){
        ans[k++] = mergeNums[j++];
    }
    i=0;
    while(i<k){
        mergeNums[left+i] = ans[i];
        i++;
    }
}

console.log(mergeNums);
mergeSort(mergeNums, 0, len-1);
console.log(mergeNums.join(" "));


function heap(len,heapNums) {
    if(len===0) return; //가지없으면 그만
    for(let i=Math.floor((len-1)/2);i >= 0; i--){ //부모를 기준으로 비교하므로 가장 아래 자식을 제외하면 절반이된다. 인덱스값의 절반부터 가장 위까지 확인
        if((i*2+1)<len && heapNums[i]<heapNums[i*2+1]){ //왼쪽 자식이 배열길이보다 작고(존재하고) 부모보다 클때
            if((i*2+2)<len){ // 오른쪽 자식이 존재하고
                if(heapNums[i*2+1]<heapNums[i*2+2]){ //오른쪽 자식이 왼쪽 자식, 부모보다 클 때 - 오른쪽 자식을 부모로 바꿈
                    temp = heapNums[i];
                    heapNums[i] = heapNums[i*2+2];
                    heapNums[i*2+2] = temp;
                }else if(heapNums[i*2+1]>heapNums[i*2+2]){ //왼쪽이 부모, 오른쪽 자식보다 클 때 - 왼쪽 자식을 부모로 바꿈
                    temp = heapNums[i]; 
                    heapNums[i] = heapNums[i*2+1];
                    heapNums[i*2+1] = temp;
                }
            } else{ // 오른쪽 자식이 없으면 왼쪽 자식을 부모로 바꿈
                temp = heapNums[i];
                heapNums[i] = heapNums[i*2+1];
                heapNums[i*2+1] = temp;
            }
        }else if((i*2+2)<len && heapNums[i]<heapNums[i*2+2]){ // 왼쪽 자식이 부모보다 작고 오른쪽 자식이 존재하며 오른쪽 자식이 부모보다 크면 오른쪽 자식으 부모로 바꿈
            temp = heapNums[i];
            heapNums[i] = heapNums[i*2+2];
            heapNums[i*2+2] = temp;
        }
    }
    temp = heapNums[0]; //가장 큰 값을 루트노드로 뺐으니 
    heapNums[0] = heapNums[len-1]; // 가장 뒤에 고정
    heapNums[len-1] = temp; //
    heap((len-1),heapNums); //고정된 값 빼고 다시 정렬
    return heapNums;
}

console.log(heapNums);
console.log(heap(len, heapNums).join(" "));



function quick(quickNums, left, right){
    if(left<right){
        let point = partition(quickNums, left, right);

        quick(quickNums, left, point-1);
        quick(quickNums,point+1,right);
    }
    return quickNums;
}
function partition(quickNums, left, right){
    let pivot = quickNums[right];
    let i = left-1;

    for(let j=left;j<=right-1;j++){
        if(quickNums[j] <= pivot) {
            i++;
            temp = quickNums[i];
            quickNums[i] = quickNums[j];
            quickNums[j] = temp;
        }
    }
    temp = quickNums[i+1];
    quickNums[i+1] = quickNums[right];
    quickNums[right] = temp;
    return (i+1);
}

console.log(quickNums);
console.log(quick(quickNums, 0, len-1).join(" "));