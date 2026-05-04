function maxSubarray(arr, s) {
  if (arr.length < s) return null;

  const maxWindowSum = 0;

  for (let i = 0; i < arr.length - s + 1; i++) {
    maxWindowSum += arr[i];
  }

  let max = maxWindowSum;

  for (let right = s; right < arr.length; right++) {
    windowSum += arr[right];
    windowSum -= arr[right - s];
    max = Math.max(max, windowSum);
  }

  return max;
}
