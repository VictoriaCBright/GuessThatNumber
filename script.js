// GUESS THAT NUMBER

// messsage to be used throughout the project
const enterNumText = `Please enter a number greater than zero.`;

// for restarting the game
let restartGame = true;

// for storing the range of the number to be guessed
let rangeNum;

//for storing the number that the user will guess
let randomNum;

//for storing hte number of attempts the user has left
let attempts;

//for storing the users guess
let guess;

//for storing the users response to play again or not play again
let playAgain;

//starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game`);

// game restarts as long as restartGane has a value of true
while (restartGame) {
    //asks user to enter a number to set the upper bound for the random number that will be created
    rangeNum = prompt(`Please enter a maximum number for the range`);

    //Using parseInt to attempt to  convert the user's response into a number value
    rangeNum = parseInt(randomNum);

    //verifies the user's entry for a range number is a number greater than zero (NOTE: all numbers, positive or negative, have a default boolean value of true, except for zero which has a default boolean value of false. Also, NaN has a default boolean value of false.)
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    //create the random number using the range number entered by the user
randomNum = Math.floor(Math.random() * rangeNum) +1;

//prompts user to enter a number of attemps allowed (AKA number of guesses)
attempts = parseInt(prompt(`Please enter a number of attemps allowed:`));

//Verifying the user's entry for a number of attempts allowed is a number greater than zero and equal to or greater than the range they set

while(!attempts || attempts < 1 || attempts > rangeNum){
    attempts = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
}

//ask user to enter a number in the range they set
guess = prompt (`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);

//continues looping until the user guesses the correct n umber of runs out of attempts (NOTE: Loops until a BREAK keyword is run)
} while (true) 
    //displays the number when a code word is entered 
    if (guess === `Mellon`) {
        alert(`The number is ${randomNum}`);
        // prompt the user to enter another guess
        guess = prompt(`Please enter a guess 1 to ${rangeNum}. You have ${attempts} left:`);
    }

    //Tries to convert the user's guess into a number
    guess = parseInt(guess);

    //verify the user's guess is a number greater than 0 and less than or equal to the range they set
    while(!guess || guess < 1 || guess > rangeNum){
        guess = parseInt(prompt(`Please enter a number 1 to ${rangeNum}`));

        //removes an attempt
        attempts--;

        //checks if user guesses correctly. if so, then the game ends
        if (guess === randomNum){
        alert(`CONGRATULATIONS YOU GUESS THE CORRECT NUMBER: ${randomNum}`);
        {randomNum};
        break;

        //checks if user has any attempts left. if not, then the game ends and the number is displayed to the user.
    } else if (attempts === 0) {
        alert(`Sorry, but you have run out of attempts (The number was ${randomNum})`);
        break;

        //checks if users guess was too low and prompts user to guess again if so
    } else if (guess < randomNum) {
        guess = prompt(`Too low. You have ${attempts} attempt(s) left.`);

        //the only other possibility is the users guess was too high so the user is prompted again
    } else {
        guess = prompt(`Too high. You have ${attempts} attempt(s) left.`);
    }
}

//prompts user with option to play again
playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

//loop continues until user submits a valid response
while (true) {
    //check if the users answer is no (AKA `n`)
    if (playAgain.toUpperCase() === `N`) {
        //alerts the user that game is over and game does not restart
        alert(`Thanks for playing.`);
        restartGame = false;
        break;

        //checks if the users answer is yes (AKA `Y`)
    } else if (playAgain.toUpperCase() === `Y`) {
        //the game restarts
        break;
    } else {
        playAgain = prompt(`Please enter Y or N.`);
        break;
    }
}


