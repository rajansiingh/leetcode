// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// two pointer approach : https://www.youtube.com/watch?v=dVPzHCP4cy0
var moveZeroes = function(nums) {
    if(nums.length < 2) return;

    let left = 0, right = 1 ;
    while(right < nums.length){
       if(nums[left] !== 0){
           left++;
           right++;
       }else if(nums[right] === 0){
          right++;
       }else{
         [nums[left], nums[right]] = [nums[right], nums[left]];
       }
    }
};

[0,1,0,3,12]

[12,1,0,3,0]
[12,1,3,0,0]


// const moveZeroes = function (nums) {
//     let fromIdx = 0, toIdx = 0;
//     for (; fromIdx < nums.length; fromIdx += 1) {
//       if (nums[fromIdx] !== 0) {
//         nums[toIdx] = nums[fromIdx];
//         toIdx += 1;
//       }
//     }
//     for (; toIdx < nums.length; toIdx += 1)
//       nums[toIdx] = 0;
//   };