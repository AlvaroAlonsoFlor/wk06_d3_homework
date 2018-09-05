const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('')

}

IsogramFinder.prototype.isIsogram = function () {
  //should use every
  return this.word.every( (letter, index) => {
    return this.word.indexOf(letter) === index
  });
}



module.exports = IsogramFinder;
