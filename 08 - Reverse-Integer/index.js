// 7. Reverse Integer

// https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    
    //new array to store reversed elements
    let results = []
    //make number a str so we can loop through it
    const str = x.toString()
    console.log(str)
    //loop through string
    let neg = false;

    for (i = 0; i < str.length; i++){
           //add number to the front of the array
        if (str[i] != "-") {

            results.unshift(str[i])

        } else {

            neg = true;

        }
    }
        //return reversed numbers by
        //converting array back into a string and then into a number
        console.log(parseInt(results.join("")))
        console.log(neg)

        if (neg === true) {

            console.log("I'm a negative number")
            let reversed = parseInt("-" + results.join(""))
            console.log(reversed)
            return reversed

        } else {
            console.log("I'm a positive number")
            return parseInt(results.join(""))
        }
    
};

//refactor

// var reverse = function(x) {
    
//     let results = []
//     const str = x.toString()
//     let neg = false;

//     for (i = 0; i < str.length; i++) {

//         str[i] != "-" ? results.unshift(str[i]) : neg = true;

//     }
    
//         if (neg === true) {

//             let reversed = parseInt("-" + results.join(""))
//             return reversed

//         } else {

//             return parseInt(results.join(""))
//         }
    
// };

reverse(789)
