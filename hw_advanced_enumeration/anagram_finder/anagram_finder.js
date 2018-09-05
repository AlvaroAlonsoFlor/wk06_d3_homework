const AnagramFinder = function (word) {
  this.word = word.toLowerCase().split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {


  let result = otherWords.filter ( (otherWord) => {
    return otherWord.length === this.word.length;
  });

  return result
}



module.exports = AnagramFinder;
