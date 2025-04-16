//subArray: A subarray is a contiguous sequence of elements within an array.
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.
/*function maxSumSubarray(arr, k) {
    
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    let currentSum = maxSum;
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}


let arr1 = [100, 200, 300, 400];
let k1 = 2;
console.log(maxSumSubarray(arr1, k1));  // Output: 700

let arr2 = [100, 200, 300, 400];
let k2 = 4;
console.log(maxSumSubarray(arr2, k2));  // Output: 1000

let arr3 = [100, 200, 300, 400];
let k3 = 1;
console.log(maxSumSubarray(arr3, k3));  // Output: 400

*/

//nageative numbers in subarray

//https://www.geeksforgeeks.org/problems/first-element-to-occur-k-times5150/1?page=2&category=Arrays,sliding-window&difficulty=Easy&sortBy=submissions

//https://www.geeksforgeeks.org/problems/count-element-occurences/1?page=3&category=Arrays,sliding-window&difficulty=Easy&sortBy=submissions