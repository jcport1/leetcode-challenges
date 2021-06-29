// LeetCode 338. Counting Bits

// https://leetcode.com/problems/counting-bits/

function countBits(n) {
    
    let array = [];
     //loop through every num until length of n is reached
     for (let i = 0; i <= n; i++) {
         //set the binary using regex and replace function to remove 0s
         //replace method returns a new string w/ some or all matches or a pattern replaced by replacement
         //patten can ebe a string or a RegExp, and rhe replacement can be a string or a function to be called for each match
         //toString(2)transforms i to binary representation
         let binary = i.toString(2).replace(/0/g, "").length;
         console.log(binary)
         //push binary to array
         array.push(binary);
     }
     return array; 
 
 };

 countBits(5)

 //Alternative solution

//  var countBits = function(num) {
//     let bits = [];
//     for (let i = 0; i <= num; i++)
//         // remove 0 from bits
//         bits.push(Number(i).toString(2).replace(/0/g, '').length);
//     return bits;
// };