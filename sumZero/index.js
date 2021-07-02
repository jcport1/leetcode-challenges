// write function call sumZero
//accepts a sorted array of integers
//function should find the first pair where the sum is 0
//return an array that includes both values that to zero or undefined if a pair does not exist


function sumZero(arr){

    //create pointers left and right using index position
    let left = 0;
    let right = arr.length -1;

    //while loop for array
    //remember this is a sorted array
    //so move points either left or right in array depending on condition of < or > 0

    //if left is not less than right then they're the same which means we've compared all values

    while(left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0) {

            //degrement the right side (which has highest value)
            right--;
        } else {
            //less than 0 so increment left side which is lowest
            left++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])