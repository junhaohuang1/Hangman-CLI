var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require('inquirer');

var word = new word;

var currentWordArray = [];



var wordToGuess = word.wordToGuess;


word.setUpWord(wordToGuess, currentWordArray);

var gameStart = function() {

    if (wordToGuess === currentWordArray.join("") && word.hitPoints > 0) {
        console.log("You Won!");

    } else if (word.hitPoints === 0) {
        console.log("You lost!")
    } else {
        inquirer.prompt([

            {
                type: 'inpput',
                name: "guessedLetter",
                message: "Which letter do you want to guess?",
                validate: function validateLastName(name) {
                    if (name.match(/[a-z]/i) === null) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }

        ]).then(function(answers) {

            var letterGuessed = new letter(answers.guessedLetter);
            letterGuessed.checkLetter(wordToGuess, currentWordArray, word.hitPoints);
            console.log(currentWordArray);
            if (wordToGuess.indexOf(letterGuessed.letterGuessed) === -1) {
                word.hitPoints--;
                console.log("You have "+word.hitPoints+" left!");
            }
            gameStart();
        })
    }
}
gameStart();