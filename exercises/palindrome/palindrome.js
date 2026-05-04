// palindrome

// solution 1 - reverse the string and compare
// function isPalindrome(string){
//     const reversedString = string.split('').reduce((reversed, char)=> char + reversed ,"")
//     return string === reversedString
// }

// solution 2 - two pointer approach
function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  do {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  } while (left < right);
  return true;
}

console.log(isPalindrome("himanshu"));
console.log(isPalindrome("abba"));
