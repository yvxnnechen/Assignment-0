function frequencyCounter(word) {
  // Insert code here;
  let obj = {};
  for(let i = 0; i < word.length; i++) {
    let l = word.charAt(i);
    if(obj[l]) {
      obj[l]++;
    } else {
      obj[l] = 1;
    }
  }
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;