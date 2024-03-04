// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Input: target = 4, nums = [1,4,4]
// Output: 1


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = i = runningSum = 0, minSize = Infinity ;

    while(i <= nums.length){
        if (runningSum >= target) {
            minSize = Math.min(minSize, i-left);
            runningSum -= nums[left];
            left++;
        }else{
            runningSum += nums[i];
            i++;
         }
    }

    return (minSize == Infinity) ? 0 : minSize;
};