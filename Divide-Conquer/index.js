// To use this patern must have sorted array

// given a sorted array of integers, write a function called search
// that accepts a value and returns the index where the value passed tothe function is located
// if the value is not found, return -1

//binary search: Time Complexity - Log(N)

function search(array, val){

    let min = 0;
    let max = array.length - 1;

    while (min <= max){
        
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < val){
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle -1;
        } else {
            return middle;
        }
    }

    return -1; 

}

const array = [1,2,3,5,6,8,9,12,15,16,29]

search(array, 15)
