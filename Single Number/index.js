//Given a non-empty array of integers nums, every element appears twice except for one. 
//Find that single one.

const nums = [2,2,1,3,3,1,5]

var singleNumber = function(nums) {
  
const obj = {}; // {100:1, 24: 3, 1543: 8}

//for of loop
//The for...of statement creates a loop iterating over iterable objects
//including: built-in String, Array, array-like objects (e.g., arguments or NodeList), 
//TypedArray, Map, Set, and user-defined iterables

//Iterate over the array and assign into a hash that keeps a tally

for (const num of nums) {
    // console.log(num)
    obj[num] = obj[num] + 1 || 1;
}

//Then a for in loop

//The for...in statement iterates over all enumerable properties of an object 
//that are keyed by strings (ignoring ones keyed by Symbols)
//including inherited enumerable properties.

//afterwards iterate over the keys in your object
//only return the single object

for (const key in obj) {
    if (obj[key] === 1){
        console.log(key)
        return key;
    }
}

};

singleNumber(nums); 
