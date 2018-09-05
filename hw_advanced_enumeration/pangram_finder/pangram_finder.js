const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase();
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const alphabet = this.alphabet;
  const sentence = this.splitPhrase();

  return alphabet.every( (letter) => sentence.includes(letter) );


}

PangramFinder.prototype.splitPhrase = function () {
  return this.phrase.split(' ').join('').split('')
};

module.exports = PangramFinder;
