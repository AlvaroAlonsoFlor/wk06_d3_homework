const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('')
  letters = this.createLetters()

}

IsogramFinder.prototype.isIsogram = function () {
  //should use every

}



module.exports = IsogramFinder;
