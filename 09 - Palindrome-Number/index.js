// LeetCode 9. Palindrome Number 

//https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {

    if (x > 2 ** 31 - 1) {
        return false;
    }
    
    //set a new array called result
    let result = [];
    
    //make x a string
    const str = x.toString();
    
    //iterate through the string
    for (i = 0; i < str.length; i++){
        //add element to the front (to make backwards)
        result.unshift(str[i]);   
    }

   //convert result array into string for comparison

   const resultStr = result.join("")

    // return true or false
        if (str === resultStr){
            return true; 
        } else {

            return false; 
        }
    }


isPalindrome(1211);

// alternative solution

// function isPalindrome(x){

//     //convert variable into array
//     const arr = String(x).split('');

//     console.log(arr)

//     //while loop to compare front and back of array
//     while (arr.length > 1) {
//         if (arr.shift() !== arr.pop()) {
//             return false;
//         }
//     }

//     return true;
// }

// isPalindrome(1211);
