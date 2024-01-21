
/** Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. 
 * Then return the number of unique elements in nums.
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 * */

/**
 * @param {number[]} nums
 * @return {number} - https://www.youtube.com/watch?v=Sxc9oZ3PrFU
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return;

    let left = 0, right = 1 ;
    while(right < nums.length){
       if(nums[left] !== nums[right]){
           left++;
           nums[left] = nums[right]
       }
       right++;
    }
    return left+1;
};


// other approach
var removeDuplicates = function(nums) {
    const length = nums.length;
    if (length === 0) return 0;
    let i = 0;
    for (let j = 1; j < length; j++) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i+1;
}