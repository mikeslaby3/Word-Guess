var wordList = ["word", "listless", "hello", "goodbye"];
var maxWrongGuesses = 6;
var currentWrongGuesses = 0;
var currentWord = "";
var currentIndex = 0;
var currentGuessedLetters = "";
var validCharacters = "abcdefghijklmnopqrstuvwxyz";

// for (currentIndex = 0; currentIndex < wordList.length; currentIndex++) {
//     currentWord = wordList[currentIndex];
//     console.log(currentWord);
// }

currentWord = wordList[currentIndex];

var wordLength = currentWord.length;
console.log(wordLength);

var currentCorrectLetters = "";

for (i = 0; i < wordLength; i++) {
    currentCorrectLetters += "_ ";
}

document.getElementById("word").innerHTML = currentCorrectLetters;
document.getElementById("guessed-letters").innerHTML = currentGuessedLetters;
document.getElementById("guesses-left").innerHTML = maxWrongGuesses - currentWrongGuesses;

document.onkeyup = function(event) {

    var userGuess = event.key;

    if (validCharacters.indexOf(userGuess) !== -1){

        var position = currentGuessedLetters.indexOf(userGuess);
        
        if (position === -1) {
            currentGuessedLetters += " " + userGuess;
            document.getElementById("guessed-letters").innerHTML = currentGuessedLetters;
            var positionInWord = currentWord.indexOf(userGuess);
            if (positionInWord !== -1) {
                console.log(positionInWord);
            } else {
                currentWrongGuesses++
                if (currentWrongGuesses >= maxWrongGuesses) {
                    document.getElementById("results").innerHTML = "You Lose!";
                } else {
                    document.getElementById("guesses-left").innerHTML = maxWrongGuesses - currentWrongGuesses;
                }
            }
        }
    }

}