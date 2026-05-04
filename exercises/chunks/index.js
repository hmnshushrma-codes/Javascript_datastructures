// array chunking given an array and a chunk size, divide the array into many subarrays where each subarray is of length size
// --directions
// given an array and a chunk size, divide the array into many subarrays where each subarray is of length size
// -- examples
// chunk([1, 2, 3, 4], 2) === [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 3) === [[1, 2, 3], [4, 5]]
// -- constraints
// assume that size is always positive
// -- starter code

function chunk(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    //starting position and end position the end position is
    // ignored so we can go beyond the array length
    chunked.push(array.slice(i, i + size));
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
