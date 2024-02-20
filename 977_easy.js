// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]


var sortedSquares = function(nums) {
    let left = 0, right =nums.length-1;
    const arr = new Array(nums.length);

    for(let i=nums.length-1; i>=0; i--){
        const rightSquared = nums[right]**2;
        const leftSquared = nums[right]**2;

        if(leftSquared > rightSquared){
            nums[i] = leftSquared;
            left++
        }else{
            nums[i] = leftSquared;
            right--;
        }
    }
    return arr;
}