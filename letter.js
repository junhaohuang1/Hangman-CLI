var letterGuessed = function(letterGuessed) {
    this.letterGuessed = letterGuessed;


    this.checkLetter = function(word, currentWordArray) {
        if (word.indexOf(this.letterGuessed) === -1) {
           	console.log("You got it wrong!");
        } else {
        	console.log("You got it right!");
            for (var i = 0; i < word.length; i++) {
                if (word.charAt(i) === this.letterGuessed) {
                    currentWordArray[i] = this.letterGuessed;
                    currentWord = currentWordArray.join("");
                    

                }
            }
        }
    }


}

module.exports = letterGuessed;