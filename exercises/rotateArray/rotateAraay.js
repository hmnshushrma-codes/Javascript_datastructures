nums = [1, 2, 3, 4, 5, 6, 7];
// k = 3
// output: [5,6,7,1,2,3,4]

function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n; // we take the modulus of k with n to handle cases where k is greater than the length of the array. This ensures that we only rotate the array by the necessary number of steps, as rotating by n steps would result in the same array.
  reverseArray(nums, 0, n - 1);
  reverseArray(nums, 0, k - 1); // we reverse the entire array first, and then we reverse the first k elements and the remaining n-k elements separately. This effectively rotates the array to the right by k steps.
  reverseArray(nums, k, n - 1);

  return nums;
}

function reverseArray(array, start, end) {
  do {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  } while (start < end);
}

console.log(rotateArray(nums, 3));
