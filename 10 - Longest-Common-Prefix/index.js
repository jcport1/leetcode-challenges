// 14. Longest Common Prefix
// Leetcode: https://leetcode.com/problems/longest-common-prefix/

// write a function to find the longest common prefeix string amonst an array of string
// if there is no common prefix, return an emptry string "

// function longestCommonPrefix(strs) {
//   //find the longest common prefix among array of strings
//   //loop over array
//   for (let i = 0; i < strs.length; i++) {
//     for (let j = 0; j < strs[i].length; j++) {
//       console.log(strs[i][j], strs[i][i + j]);
//       if (strs[i][j] !== strs[i][i + j]) {
//         console.log("Break!");
//         break;
//       }
//     }
//   }
//   //return prefix string
//   //if no common prefix return emptry string ""
// }

// Solution

function longestCommonPrefix(strs) {
  // if strings is empty return ''
  if (!strs.length) return "";

  // loop through length of first string

  for (let i = 0; i < strs[0].length; i++) {
    // loop through each letter of additional strings
    for (let s of strs) {
      // if the one of the letters from original does not match
      // exit string
      //slice the string up to the non-matched letter and return the result
      if (s[i] !== strs[0][i]) {
        const result = s.slice(0, i);
        return result;
      }
    }
  }
  return strs[0];
}

strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);
