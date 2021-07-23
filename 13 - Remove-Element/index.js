//27. Remove Element:https://leetcode.com/problems/remove-element/

function removeElement(nums, val) {
  for (i = 0; i < nums.length; i++) {
    //iterate and check if element = val
    if (nums[i] === val) {
      console.log(i);
      //remove element
      nums.splice(i, 1);
      //decrement so the next iteration starts at the next index
      i--;
    }
  }
  return nums.length;
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
