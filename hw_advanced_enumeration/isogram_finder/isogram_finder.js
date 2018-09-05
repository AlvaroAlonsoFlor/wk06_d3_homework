const IsogramFinder = function (word) {
  this.word = word.toLowerCase()
  // letters = letters without repetition

}

IsogramFinder.prototype.isIsogram = function () {
  //should use every
  const word = this.word.split('')

  letters.every( (letter) => word.includes(letter) )

}

module.exports = IsogramFinder;
