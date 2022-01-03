function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let count = 0;
  arr.map(function(el) {
    if(typeof el === 'string' || typeof el === 'boolean') {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;