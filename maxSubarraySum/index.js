// write a function called maxSubarraySum which accepts 
// an array of intergers and number called n
// the function should calculate the maximum sum of n consecutive elements in the array

//sliding window

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

//set your initial window
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;

    //loop over array once
    //start loop at next new value
    //to figure out value of new subset
    //move window over by subtracting the first index of window and adding new value(next index)

    for (let i = num; i < arr.length; i++){
        //set temp sum to new window
        //arr[i] -> new value (next index in window)
        //arr[i - num]
        tempSum = tempSum - arr[i - num] + arr[i];
        //figure out max between new sum (temp) and previous sum(maxSum)
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)