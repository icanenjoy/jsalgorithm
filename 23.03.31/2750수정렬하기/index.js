let [len,...nums] = require('fs').readFileSync('test.txt').toString().trim().split("\n").map(Number);

//선택

function selectionSort(len, nums){
    let min = 0;
    let change = 0;
    for(let i=0;i<len-1;i++){
        min = i; //시작값을 가장 작은 값으로 선택
        for(let j=i+1;j<len;j++){ // i를 기준으로 뒤에 값들 확인
            if(nums[j]<nums[min]) //뒤에 i보다 작은 값이 있다면 min값을 바꾸고 또 있으면 바꾼다.
                min=j;
        }//그렇게 i를 기준으로 가장 작은 값이 정해지면
        change = nums[i]; // i자리 값을 빼두고
        nums[i]=nums[min]; // i자리에 가장 작은 값을 넣는다.
        nums[min]=change; // 그리고 i자리에 있던 값은 가장 작은 값이 있던 곳에 넣는다.

    }
    console.log(nums);
}

//selectionSort(len,nums);
//삽입
function insertionSort(len,nums){
    let key =0; 
    for(let i=1;i<len;i++){ //i를 기준으로 앞쪽을 확인해서 1부터 시작 
        let j = 0;
        key = nums[i]; //기준값을 i로 정한다.
        for(j=i-1;j>=0;j--){ //기준값 앞쪽을 확인한다.
            if(nums[j]>key) //기준보다 값이 크면 한자리씩 밀어서 key가 들어갈 자리를 만든다.
                nums[j+1] = nums[j];
            else break; //그러다 nums[j]값이 더 작아지면 멈춘다. 
        }
        nums[j+1]=key; // 그자리에 key를 넣는다.
    }
    console.log(nums);
}

//insertionSort(len,nums);
//버블
function bubbleSort(len,nums){
    let temp= 0;
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-1-i;j++){ //뒤쪽부터 정렬되므로 j는 len-1-i까지 본다. 뒤에는 정렬되어있음
            if(nums[j]>nums[j+1]){ //앞에 값이 더 크면 바꾼다.
                temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    console.log(nums);
}
bubbleSort(len,nums);