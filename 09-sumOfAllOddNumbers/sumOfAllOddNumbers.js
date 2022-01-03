function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let count = 0;
  nums.map((el) => {
    if(el % 2 != 0) {
      count += 1;
    }
  })
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;