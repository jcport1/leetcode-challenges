// implement function called countUniqueValues, which accepteds a sorted array
// and counts the unique values in the array
// there can be negative numbers in the array, but it will always be sorted

//create function

// function countUniqueValues(sortedarr){

//     let values = {};

//     //loop through array 
//     //count unique values
//     //return # of unique values or undefined if empty

//     for (let i = 0; i < sortedarr.length; i++ ) {
//         let value = sortedarr[i];
//         values[value]? values[value] += 1 : values[value] = 1;
//     }

//     const uniqueValues = Object.keys(values).length
//     return uniqueValues

// }

// sortedarr = [] // 7

// countUniqueValues(sortedarr);

//Multiple pointer solution

function countUniqueValues(arr){

    if (arr.length === 0) return 0;
    //create two pointers

    //pointer 1: i
    let i = 0;

    //iterate through array

    //for loop for our "scout j" which is checking for unique values
    //point 2: j
    for (let j = 1; j < arr.length; j++){

        //if j is not equal to i than it's a unique value
        //modify the array by moving i up one and changing the index to unique value
        //j will continue moving up the array due to loop
        //if i is equal j then nothing happens and j just moves up
       if (arr[i] !== arr[j]){
           i++;
           arr[i] = arr[j]
       }
    }

     return i + 1;

}

const arr = [1,1,2,3,3,4,5,6,6,7] // 2

countUniqueValues(arr);
