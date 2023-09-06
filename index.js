var randomNum = Math.floor(Math.random() * 100);
const submit = document.querySelector(".submit");
const userInput = document.querySelector(".userinput");
const yourguess = document.querySelector(".yourguess");
const loworhigh = document.querySelector(".loworhigh");
const remainAttemt = document.querySelector(".Remain-attempt");
const guesses = document.querySelector(".guess");
const newgame = document.querySelector(".newgame")

let lastguessedinfo = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validGuess(guess);
    })
}

function validGuess(guess) {
    if (isNaN(guess)) {
        alert("It's not a number, please enter a valid number.")
    }
    else if (guess < 1 || guess > 100) {
        alert("Less than 1 and more than 500 number is not valid.");
    }
    else {
        lastguessedinfo.push(guess);
        const gameOverCondition = remainAttemt.innerHTML;
        if (gameOverCondition <= 1) {
            displayGuess(guess);
            displayMessage(`Game Over : random number was ${randomNum}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Wow, you guessed it right 🫡`);
        userInput.setAttribute('disabled','')
        submit.setAttribute('disabled','');
        endGame();
    }
    else if (guess > randomNum) {
        displayMessage(`Number is too high ☹️`)
    }
    else if (guess < randomNum) {
        displayMessage(`Number is too Low 🤦‍♂️`)
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guesses.innerHTML += `${guess},`;
    numGuess++;
    remainAttemt.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    loworhigh.innerHTML = `${message}`
}

function endGame() {
    const gameOverCondition = remainAttemt.innerHTML;
    if (gameOverCondition <= 1) {
        userInput.setAttribute('disabled', '');
        submit.setAttribute('disabled','');

    }
    newgame.style.display = 'block';
    newGame();
}

function newGame() {
    newgame.addEventListener('click', () => {
        
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        numGuess = 1;
        playGame = true;
        lastguessedinfo = [];
        remainAttemt.innerHTML = `${11 - numGuess}`
        displayMessage('');
        newgame.style.display = 'none';
        guesses.innerHTML = '';
    })
    randomNum = Math.floor(Math.random() * 100);

}

