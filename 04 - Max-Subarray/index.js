// 53. Max Subarray: https://leetcode.com/problems/maximum-subarray/submissions/
// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {

    let solution = nums[0];
    let sum = nums[0];
   
    for (let i = 1; i < nums.length ; i++) {
        
        sum = Math.max(nums[i], sum + nums[i])
        solution = Math.max(sum, solution)
    }

    return solution;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4]

maxSubArray(nums)