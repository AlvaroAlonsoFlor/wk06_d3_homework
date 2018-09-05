const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const alphabet = this.alphabet;

  //every
  // phrase include every letter
}

PangramFinder.prototype.splitPhrase = function () {
  return this.phrase.split(' ').join('').split('')
};

module.exports = PangramFinder;
