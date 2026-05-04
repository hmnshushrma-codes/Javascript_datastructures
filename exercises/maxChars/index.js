// --directions
// given a string, return the character that is most commonly used in the string
// -- examples
// maxChars("abcccccccd") === "c"
// maxChars("apple 1231111") === "1"
// -- constraints
// don't worry about spaces
// if there are more than one max char, return any one of them
// -- starter code

function maxChars(str) {
  const map = {};
  let max = 0;
  for (let char of str) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  // why we have used reduce here instead of for loop?
  // reduce allows us to iterate through the entries of the map and keep track of
  // the maximum count and corresponding character in a single pass.
  // It provides a more functional programming approach,
  // making the code concise and easier to read compared to a
  // traditional for loop.
  // Additionally, reduce can be more efficient as it avoids the need for an
  // explicit loop and mutable variables, leading to cleaner and more maintainable code.

  // return Object.entries(map).reduce((acc , [char, count]) => {
  //   if (count > acc.max) {
  //     return { max: count, maxChar: char };
  //   }
  //   return acc;
  // }, { max: 0, maxChar: null });

  for (let char in map) {
    if (map[char] > max) {
      max = map[char];
      maxChar = char;
    }
  }
  return { max, maxChar };
}

console.log(maxChars("abcccccccd"));
