function titleCaseEdit(title) {
  // Insert code here;
  title = title.toLowerCase()
  const word = title.split(' ')
  let s = ""
  for(let i = 0; i < word.length; i++) {
      word[i] =  word[i].charAt(0).toUpperCase() + word[i].slice(1)
  }
  return word.join(' ')
}

// Do not edit this line;
module.exports = titleCaseEdit;