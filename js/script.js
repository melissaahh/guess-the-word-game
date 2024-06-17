const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgess = document.querySelector(".word-in-progess");
const remainingGuesses = document.querySelector(".remaining");
const eightGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

// add placeholders functions

const placeholder = function (word){
   const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
     }
    wordInProgress.innerText = placeholderLetters.join("");
}; 

placeholder(word);


guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const guess = inputLetter.value;
    console.log(guess);
    inputLetter.value = "";
})