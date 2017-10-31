var word = function() {
    this.wordsArray = ["horse", "cow", "pig", "goat", "chicken", "sheep", "donkey", "duck", "llama", "rabbit"]

    this.wordToGuess = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)]
    
    this.hitPoints = 10;

    this.setUpWord = function(word,currentWordArray) {
        for (var i = 0; i < word.length; i++) {
            currentWordArray[i] = "_ ";
        }
    }

}

module.exports = word;