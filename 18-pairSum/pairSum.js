function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1) {
    throw "Array length is 1 or less";
  }

  for(let i = 0; i < nums.length - 1; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target && i != j) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;