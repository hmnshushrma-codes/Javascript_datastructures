// Given an integer array, find the contiguous subarray with the largest sum and return its sum.

// Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6  → subarray [4, -1, 2, 1]

function maxSubArray(nums) {
  let curr = nums[0],
    best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    best = Math.max(best, curr);
  }
  return best;
}
// Time: O(n)  Space: O(1)
