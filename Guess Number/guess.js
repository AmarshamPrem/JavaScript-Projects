let container = document.querySelector(".container");
let simple = document.getElementById("simple");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let compNum = generateNo();
let previousAttemptNumbers = [];
let tries;

simple.addEventListener("click", () => startGame(10));
medium.addEventListener("click", () => startGame(7));
hard.addEventListener('click', () => startGame(4));

function startGame(no) {
    tries = no;
    container.innerHTML = `
    <h3 id="message">Your Guess</h3>
    <div id="inputDiv">
        <input type="number" id="number" min="0" max="100" placeholder="Enter your Guess">
        <input type="button" id="arrowButton" value="=>">
    </div>
    <div class="msgs">
        <div class="msg-container">
            <p>Number Of Remaining Attempts:</p>
            <span id="remainingAttempts">0</span>
        </div>
        <div class="msg-container">
            <p>Previous Guesses:</p>
            <span id="previousGuesses">-</span>
        </div>
    </div>`;
    displayResult(undefined, undefined, tries);
    document.getElementById("arrowButton").addEventListener('click', () => {
        if (compareNumbers()) {
            createButton("New Game");
        }
    });
}

function generateNo() {
    return Math.floor((Math.random() * 100) + 1);
}

function compareNumbers() {
    let userNumElement = document.getElementById("number");
    let userNum = Number(userNumElement.value);
    
    if (userNum > 100) {
        userNum = 100;
    } else if (userNum < 0) {
        userNum = 1;
    }
    
    tries--;
    if (tries > 0) {
        if (compNum == userNum) {
            displayResult("Exactly", userNum, tries);
            userNumElement.value = '';
            return true;
        } else if (userNum > compNum) {
            displayResult("It is Smaller", userNum, tries);
            userNumElement.value = '';
            return false;
        } else if (userNum < compNum) {
            displayResult("It is Bigger", userNum, tries);
            userNumElement.value = '';
            return false;
        }
    } else if (tries === 0) {
        displayResult("You failed", userNum, tries);
        createButton("Retry");
        alert('You last the number was : ' + compNum);
        return false;
    }
}

function createButton(value) {
        let arrowButton = document.getElementById("arrowButton");
        let userNumElement = document.getElementById("number");
        let inputDiv = document.getElementById("inputDiv");
        let button = document.createElement('button');
        let section = document.createElement('section');
        
        button.innerText = `${value}`;
        section.append(button);
        inputDiv.after(section);
        arrowButton.disabled = true;
        userNumElement.disabled = true;
        userNumElement.value = "";

        button.addEventListener('click',  () => {
            location.reload();
        });
} 

function displayResult(result, userNum, tries) {
    let message = document.getElementById("message");
    let remainingAttempts = document.getElementById("remainingAttempts");
    let previousGuesses = document.getElementById("previousGuesses");

    if (result !== undefined) {
        previousAttemptNumbers.push(userNum);
        message.innerText = result;
        if (previousAttemptNumbers.length !== 0) {
            previousGuesses.innerText = previousAttemptNumbers.join(", ");
        }
    }
    
    remainingAttempts.innerText = tries;
}