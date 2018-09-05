const AnagramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {


  let result = otherWords.filter ( (otherWord) => {
    return otherWord.length === this.word.length && otherWord.toLowerCase() !== this.word.join('') ;
  });

  result = result.filter( (otherWord) => {
    return otherWord.toLowerCase().split('').every( (letter) => {
      return this.word.includes(letter);
      //if it's true it will filter it, otherwise not
    });
  });

  return result;
}



module.exports = AnagramFinder;
