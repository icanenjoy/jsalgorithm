let [len,...nums] = require('fs').readFileSync('test.txt').toString().trim().split("\n").map(Number);
let temp =0;

/*
function merge(nums, left, right) {
    if(left<right){ //같거나 바뀌면 끝
        let mid = Math.floor((left+right)/2); 

        merge(nums, left, mid); //왼쪽
        merge(nums, mid+1, right); //오른쪽

        mergeSort(nums, left, mid, right);
    }
    return nums;
}

function mergeSort(nums, left, mid, right){
    let ans = [];
    let i=left;
    let j=mid+1;
    let k=0;
    while(i<=mid && j<right){
        if(nums[i]<=nums[j]){
            ans[k++] = nums[i++];
        }else {
            ans[k++] = nums[j++];
        }
    }
    while(i<= mid){
        ans[k++] = nums[i++];
    }
    while(j<=right){
        ans[k++] = nums[j++];
    }
    k--;
    while(k>=0){
        nums[left+k] = ans[k];
        k--;
    }
}
console.log(merge(nums, 0, len-1));
*/


function heap(len,nums) {
    if(len===0) return;
    for(let i=Math.floor((len-1)/2);i >= 0; i--){
        if((i*2+1)<len && nums[i]<nums[i*2+1]){
            if((i*2+2)<len){
                if(nums[i*2+1]<nums[i*2+2]){
                    temp = nums[i];
                    nums[i] = nums[i*2+2];
                    nums[i*2+2] = temp;

                }else if(nums[i*2+1]>nums[i*2+2]){
                    temp = nums[i];
                    nums[i] = nums[i*2+1];
                    nums[i*2+1] = temp;
                }
            } else{
                temp = nums[i];
                nums[i] = nums[i*2+1];
                nums[i*2+1] = temp;
            }
        }else if((i*2+2)<len && nums[i]<nums[i*2+2]){
            temp = nums[i];
            nums[i] = nums[i*2+2];
            nums[i*2+2] = temp;
        }
    }
    temp = nums[0];
    nums[0] = nums[len-1];
    nums[len-1] = temp;
    heap((len-1),nums);
    return nums;
}

console.log(heap(len, nums).join(" "));

function quick(nums, left, right){
    if(left<right){
        let point = partition(nums, left, right);

        quick(nums, left, point-1);
        quick(nums,point+1,right);
    }
    return nums;
}

function partition(nums, left, right){
    let pivot = nums[right];
    let i = left-1;

    for(let j=left;j<=right-1;j++){
        if(nums[j] <= pivot) {
            i++;
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    temp = nums[i+1];
    nums[i+1] = nums[right];
    nums[right] = temp;
    return (i+1);
}

console.log(quick(nums, 0, len-1).join(" "));

