const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('')
  letters = this.createLetters()

}

IsogramFinder.prototype.isIsogram = function () {
  //should use every
  const word = this.word;

  return letters.every( (letter) => word.includes(letter) );

}

IsogramFinder.prototype.createLetters = function () {
  const letters = []

  this.word.forEach((item) => {
    if (!letters.includes(item)) {
      letters.push(item)
    }
  });

  return letters
};

module.exports = IsogramFinder;
