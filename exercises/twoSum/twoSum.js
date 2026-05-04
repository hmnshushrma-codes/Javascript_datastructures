// Given an array of integers and a target, return indices of the two numbers that add up to the target. Assume exactly one solution exists.

// Input:  nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]  (nums[0] + nums[1] = 9)

// Time: O(n)  Space: O(n)
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    //        7           9        2
    //        2          9        7 nums[1] = 7
    const complement = target - nums[i]; // here we calculate the complement (the value needed to reach the target) for the current number nums[i].
    // For each number, we calculate its complement (the value needed to reach the target).
    // We then check if this complement exists in our map. If it does, it means we've previously seen a number
    // that can be added to the current number to reach the target, so we return their indices.
    // If not, we store the current number and its index in the map for future reference.

    if (map[complement] !== undefined) { // if the complement exists in the map, it means we've previously seen a number that can be added to the current number to reach the target
      return [map[complement], i]; // we return the indices of the two numbers that add up to the target
    }
    //  store the current number and its index in the map for future reference
    map[nums[i]] = i; // we store the current number and its index in the map for future reference
    console.log("map is -> ", map);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));



// kadaneh solution
// Given an integer array, find the contiguous subarray with the largest sum and return its sum.

// Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6  → subarray [4, -1, 2, 1]


function maxSubArray(nums) {
  let curr = nums[0], best = nums[0];// we initialize two variables, curr and best, to the first element of the array. curr will keep track of the current subarray sum, while best will keep track of the maximum subarray sum found so far.
  for (let i = 1; i < nums.length; i++) {// we iterate through the array starting from the second element (index 1) to the end of the array.
    curr = Math.max(nums[i], curr + nums[i]); 

    // for each element, we update curr to be the maximum of the current element itself (nums[i]) and the sum 
    // of curr and the current element (curr + nums[i]). 
    // This step decides whether to start a new subarray at the current element or to continue the existing subarray by adding the current element to it.
    best = Math.max(best, curr);
    console.log({ best, curr, index: i });
    // we then update best to be the maximum of the current best and the updated curr. 
    // This step ensures that we keep track of the largest subarray sum found so far.
  }
  return best;
}
// Time: O(n)  Space: O(1)

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));




// rotate an array 

// Given an array, rotate it to the right by k steps in-place.

// Input:  nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

