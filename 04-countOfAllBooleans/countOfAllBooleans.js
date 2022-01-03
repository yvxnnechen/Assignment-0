function countOfAllBooleans(arr) {
  // Insert code here;
  let i = 0;
  arr.map((el) => {
    if (typeof el === 'boolean') {
      i++;
    }
  }
  );
  return i;
}

// Do not edit this line;
module.exports = countOfAllBooleans;