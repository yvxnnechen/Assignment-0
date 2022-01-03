function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let union = new Set();
  for (let i = 0; i < args.length; i++) {
    for (const s of args[i]) {
      union.add(s);
    }
  }
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;