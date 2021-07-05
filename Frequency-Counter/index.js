// write a function called sameFrequency. 
// given two positive integers, find out if the two numbers have the same
// frequency of digits

// solution must have have the foloowing complexitie: O(n)

// sample input 
// sameFrequency(182, 281) true

// write function

function sameFrequency(num1, num2){
 
    //convert num1, num2 to string or array 

    const num1str = num1.toString()
    const num2str = num2.toString()

    console.log(num1str)
    console.log(num2str)

     // if num of digits don't match, then false
     if (num1str.length !== num2str.length) return false;

    let obj1 = {};
    let obj2 = {};

    //find out if the two nums have same freq of digits
        // iterate through num1
        // save to object
        //repeat steps for num2 

    for (let i = 0; i < num1str.length; i++) {
        let num = num1str[i];
        obj1[num] ? obj1[num] + 1 : obj1[num] = 1; 
    }
    console.log(obj1)

    for (let i = 0; i < num2str.length; i++) {
        let num = num2str[i];
        obj2[num] ? obj2[num] + 1 : obj2[num] = 1; 
    }

    console.log(obj2)

    // compare both objects
             //return true or false
        //keys and values should match true
        //otherwise false 

    for (const key in obj1){

        // if key from obj1 doesn't exist in obj2
        if (!(key in obj2)){
            // return false
            console.log("key not found in obj2")
            return false; 

        }
        

        if (obj1[key] !== obj2[key]) {
            console.log("second if statement")
            return false;
        }

        console.log("Same frequency of digits")
        return true;

    }

    
};

const num1 = 18
const num2 = 281 

sameFrequency(num1, num2);