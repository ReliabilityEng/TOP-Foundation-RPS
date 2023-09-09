// Game Logic
function computerRandomise() {
    // Create a random number
    const randomNum = Math.random();
    let selection;
    
    // Depending on the random number, select if rock paper or scissors
    if(randomNum >= 0 && randomNum < 1/3) {
        selection = 'rock';
    } else if (randomNum >= 1/3 && randomNum < 2/3) {
        selection = 'paper';
    } else {
        selection = 'scissors';
    }

    return selection;
}

// Game Logic
function playRound(playerSelection) {
    // Removing case ins
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerRandomise();
    // Defining winning logic using object
    // key = player ; value = winning condition for player
    const rpsLogic = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'};

    // Declaring outcome variable
    let outcome;

    // Deciding the winner
    if (playerSelection === computerSelection) {
        outcome = `result: draw`;
    } else {
        // if value of selected key is equal to computer choice. Player wins
        outcome = rpsLogic[playerSelection] === computerSelection 
        ? `result: Player wins` 
        : `result: Computer wins` ;
    }

    return [outcome, playerSelection, computerSelection];
}

// Initialisation
const score = {'player': 0, 'computer': 0};
const rpsButtons = document.querySelector('.rps_buttons');
rpsButtons.classList.toggle('invisible');

// Change visibility of items
function showControls() {
    
    rpsButtons.classList.remove('invisible');

    const scoreText = document.createElement('p');
    scoreText.textContent = `Player: ${score.player} Computer: ${score.computer}`;

    const results = document.querySelector('.results');
    results.appendChild(scoreText);
}

const playBtn = document.querySelector('.playBtn')
playBtn.addEventListener('click', showControls, {once: true});

const play = document.querySelectorAll('.rps_button');
play.forEach((element) => element.addEventListener('click', 
    (e) => console.log(element.id)
));