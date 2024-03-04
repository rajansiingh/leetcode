// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

var maxSubArray = function(nums) {
    if (!nums.length) return 0;
    let subArrSum = nums[0], maxSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        subArrSum = Math.max(nums[i], subArrSum + nums[i])
        maxSum = Math.max(maxSum, subArrSum);
    }
    return maxSum;
};


// If you have return star & last index of array
var maxSubArray = function(a) {
    var max_so_far = -Infinity, max_ending_here = 0,
       start =0, end = 0, s=0;
 
    for (var i=0; i< a.length ; i++ )
    {
        max_ending_here += a[i];
 
        if (max_so_far < max_ending_here)
        {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }
 
        if (max_ending_here < 0)
        {
            max_ending_here = 0;
            s = i + 1;
        }
    }

    return max_so_far;
};