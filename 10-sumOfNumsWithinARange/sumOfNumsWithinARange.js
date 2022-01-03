function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] >= start && nums[i] <= end) {
        count++;
      }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;