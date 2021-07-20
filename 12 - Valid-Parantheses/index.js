// LeetCode 20: https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characts '(', ')', etc.
// determine if the input string is valid

//an input string is valid if:
// 1. Open brackets must be closed by the same type of brackets
// 2. Open brackets mjst be closed in the correct order

function isValid(s) {
  //correct characters: '()','[]','{}'
  const validCharacters = ["()", "[]", "{}"];
  let arr = s.split("");
  //loop through the string

  for (let i = 0; i < arr.length; i++) {
    let compareS = arr[i] + arr[i + 1];

    if (validCharacters.includes(compareS)) {
      console.log("match", arr[i], arr[i + 1]);
    }
  }

  return true;
  //if correct return true
  //else return false
}

isValid("()[]{}"); //true
