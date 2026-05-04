// Given two strings s and t, return true if t is an anagram of s (same characters, same frequency).

// Input:  s = "anagram", t = "nagaram"
// Output: true

// Input:  s = "rat", t = "car"
// Output: false

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;
//   const count = {};
//   for (let c of s) count[c] = (count[c] || 0) + 1;
//   for (let c of t) {
//     if (!count[c]) return false;
//     count[c]--;
//   }
//   return true;
// }
// Time: O(n)  Space: O(1) — at most 26 keys

function isAnagram(s, t) {
  // length check
  if (s.length !== t.length) return false;
  const countmap = {};

}
