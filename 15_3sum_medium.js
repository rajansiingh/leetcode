// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums, target = 0) {
    const results = [];
    
    if(nums.length < 3) return results;

    nums = nums.sort((a,b) => a - b);

    for(let i=0; i< nums.length-2; i++){

        // positive numbers cannot sum to a negative number to make it equal to target
        if(nums[i] > target) break;
        
        // we don't want repeats, so skip numbers we've already seen
        if(i > 0 && nums[i] === nums[i-1]) continue;
         
        // i is left pointer
        let j = i+1; // middle pointer
        let k = nums.length -1; // right pointer

        while(j < k){
            const sum = nums[i] + nums[j] + nums[k];

            if(sum === target){
                results.push([nums[i], nums[j],nums[k]]);

                // this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
                while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				// finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.
				j++;
				k--;

            }else if(sum < target){
                // if the sum is too small, increment `j` to get closer to the target
                j++;
            }else{
                // if the sum is too large, decrement `k` to get closer to the target
                k--;
            }
        }
    }
    return results;
};