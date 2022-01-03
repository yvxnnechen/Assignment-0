function isPalindrome(word) {
  // Insert code here;
  for(let i = 0; i < Math.floor(word.length/2); i++) {
    if(word.charAt(i) != word[word.length-i-1]) {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;