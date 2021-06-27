// 303. Range Sum Query - Immutable


//creates an array of sums for ranges of indices
//i.e a running total that we can reference later

var NumArray = function(nums) {

   this.sums = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.sums.push(sum);
    }

};

// use differences of indices to calculate range sum of every query

NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
    
};

const nums = [-2, 0, 3, -5, 2, -1]

NumArray(nums)

