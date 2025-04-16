/*let array =[1,2,3,4,5];
let i=0;
let j=array.length-1;
let temp;

while(i<=j){
    //swap i & j
    temp=array[i];
    array[i]=array[j];
    array[j]=temp;
    i++;
    j--
}
console.log(array)
*/
/*
//Palindrome or not 
function isPalindrome(array) {
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        if (array[i] !== array[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

let array1 = [1, 2, 3, 2, 1];
let array2 = [1, 2, 3, 4, 5];

console.log(isPalindrome(array1)); // Output: true
console.log(isPalindrome(array2)); // Output: false
*/
//marge sorted arrays

/*function merge(nums1, m, nums2, n) {
    let i = m - 1; 
    let j = n - 1; 
    let k = m + n - 1; 
    while (i >= 0 && j >= 0) {
        
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); 

let nums3 = [1];
let nums4 = [];
merge(nums3, 1, nums4, 0);
console.log(nums3); 
let nums5 = [0];
let nums6 = [1];
merge(nums5, 0, nums6, 1);
console.log(nums5); 
*/
//Intersection of two arrays
//Given two arrays, write a function to compute their intersection.
/*var findIntersectionValues = function(nums1, nums2) {
    let a = 0, a2 = 0;
       for ( let i = 0; i < nums1.length; i++){
              if (nums2.includes(nums1[i])){
               a++;
              }
       }
       for ( let j = 0; j < nums2.length; j++){
              if (nums1.includes(nums2[j])){
               a2++;
              }
       }
       return [a,a2];
   };
   console.log(findIntersectionValues([2,4,5,6,9],[6,3,1,4,2]));*/

//Intersection of two arrays
   /*var findIntersectionValues = function(nums1, nums2) {
    let a = 0, a2 = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                a++;
                break;
            }
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        for (let i = 0; i < nums1.length; i++) {
            if (nums2[j] === nums1[i]) {
                a2++;
                break; 
            }
        }
    }
    
    return [a, a2];
};

console.log(findIntersectionValues([2, 4, 5, 6, 9], [6, 3, 1, 4, 2]));
*/
var findIntersectionValues = function(nums1, nums2) {
    let count1=0;
    let count2=0;

    let set=new Set(nums2);

    for(let i=0;i<nums1.length;i++){
       if(set.has(nums1[i])){
          count1++;
       }
    }

    set.clear();
    set=new Set(nums1);

    for(let i=0;i<nums2.length;i++){
        if(set.has(nums2[i])){
            count2++;
        }
    }
    let ans=[];
    ans.push(count1,count2);
    return ans;
};

let low=0;
    let mid=0;
    let high=nums.length-1;

    let temp;
    while(mid<=high){
        if(nums[mid]==0){
            temp=nums[low];
            nums[low]=nums[mid];
            nums[mid]=temp;
            low++;
            mid++;
        }
        else if(nums[mid]==2){
            temp=nums[high];
            nums[high]=nums[mid];
            nums[mid]=temp;
            high--;
        }
        else{
            mid++;
        }
    }
    return nums;