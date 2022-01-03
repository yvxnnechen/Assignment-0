function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let count = 0;
  nums.map((el) => {
    if(el < target) {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;