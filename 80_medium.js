// 80. Remove Duplicates from Sorted Array II
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// https://pythontutor.com/render.html


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 3) return;

    let left = 0, right = 1, count = 0;
    while(right < nums.length){
       if(nums[left] !== nums[right]){
           left++;
           nums[left] = nums[right]
           count = 0
       }else if(nums[left] === nums[right] && count <1){
           count++;
           nums[++left] = nums[right]
       }
       right++;
    }

    return left+1;
};

// other approach
const removeDuplicates = function(nums) {
    let pos = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[pos -2]) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    return pos;
 };