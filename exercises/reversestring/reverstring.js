// solution 1 - split, reverse, join
// How it works:
// 1. split("") converts the string into an array of individual characters: "hello" -> ["h","e","l","l","o"]
// 2. reverse() reverses the array in place: ["h","e","l","l","o"] -> ["o","l","l","e","h"]
// 3. join("") combines the array back into a string: ["o","l","l","e","h"] -> "olleh"
function reverseString1(str) {
  const word = str.split("");
  return word.reverse().join("");
}

// solution 2 - for loop
// How it works:
// Iterates through each character from left to right, but prepends each character to the result.
// For "hello": "" -> "h" -> "eh" -> "leh" -> "lleh" -> "olleh"
// By placing the current char BEFORE the accumulated string, the order gets reversed.
function reverseString2(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

// solution 3 - reduce
// How it works:
// split("") converts string to array, then reduce() accumulates a result by iterating each element.
// The accumulator starts as "" (the second arg to reduce). On each iteration, the current char
// is prepended to the accumulator — same logic as the for loop but using a functional approach.
// For "hello": "" -> "h" -> "eh" -> "leh" -> "lleh" -> "olleh"
function reverseString3(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

// solution 4 - forEach
// How it works:
// Same prepend logic as solutions 2 and 3, but uses forEach to iterate through the character array.
// split("") creates the array, then forEach visits each char and prepends it to the result string.
// For "hello": "" -> "h" -> "eh" -> "leh" -> "lleh" -> "olleh"
function reverseString4(str) {
  let reversedStringValue = "";
  str.split("").forEach((char) => {
    reversedStringValue = char + reversedStringValue;
  });
  return reversedStringValue;
}

// solution 5 - do...while
// How it works:
// Instead of prepending, this takes characters from the END of the string and appends them.
// Each iteration: grabs the last character, appends it to the result, then removes it from str.
// For "hello": grabs "o" -> "l" -> "l" -> "e" -> "h", building "olleh" by appending each.
// slice(0, -1) removes the last character from the original string until it's empty.
function reverseString5(str) {
  let reversedStringValue = "";
  do {
    let charValue = str[str.length - 1];
    reversedStringValue += charValue;
    str = str.slice(0, -1);
  } while (str.length > 0);

  return reversedStringValue;
}

module.exports = {
  reverseString1,
  reverseString2,
  reverseString3,
  reverseString4,
  reverseString5,
};
