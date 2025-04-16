/**
set : push the key value index map 

let map =new map();
map.set(10,1);
map.set(3,5);
map.set(10);

2: delete();
3:size();
4:get(); 
5:hash();

*/

/*function calculateFrequency(arr) {
    let frequency = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        frequency[element] = (frequency[element] || 0) + 1;
    }

    console.log("Element - Frequency");
    for (let key in frequency) {
        if (frequency.hasOwnProperty(key)) {
            console.log(`${key} - ${frequency[key]}`);
        }
    }
}

let arr = [1, 2, 3, 2, 4, 3, 2, 1, 5];
calculateFrequency(arr);

*/

/*function calculateFrequency(arr) {
    let frequency = new Map();

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (frequency.has(element)) {
            frequency.set(element, frequency.get(element) + 1);
        } else {
            frequency.set(element, 1);
        }
    }

    console.log("Element - Frequency");
    frequency.forEach((value, key) => {
        console.log(`${key} - ${value}`);
    });
}

let arr = [1, 2, 3, 2, 4, 3, 2, 1, 5];
calculateFrequency(arr);
*/

/*
let arr = [1, 2, 3, 2, 4, 3, 2, 1, 5];
let frequency = new Map();

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequency.has(element)) {
        frequency.set(element, frequency.get(element) + 1);
    } else {
        frequency.set(element, 1);
    }
}

console.log("Element - Frequency");
frequency.forEach((value, key) => {
    console.log(`${key} - ${value}`);
});
*/
//optimize solution
/*var productExceptSelf = function(nums) {
    const n=nums.length;
    const answer =new Array(n).fill(1);
    let prefix=1;
    for(let i =0 ;i<n;i++){
        answer[i]=prefix;
        prefix *=nums[i];
    }
    let suffix=1;
    for(let i =n -1;i>=0;i--){
        answer[i] *=suffix;
        suffix *=nums[i];
    }
    return answer;
};
*/
//dsa prictic sesstion from intarnshal
/*var productExceptSelf = function(nums) {
    let ans=[];
    for(let i=0;i<nums.length;i++){
        let lp=1;
        let rp=1;

        for(let t=0;t<=i-1;t++){
            lp=lp*nums[t];
        }

        for(let p=i+1;p<nums.length;p++){
            rp=rp*nums[p];
        }

        ans.push(lp*rp);
    }
    return ans;
};
*/

