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
        outcome = `Player picked ${playerSelection}
                   Computer picked ${computerSelection}.
                   Result: Draw`;
        outcomeDescription.textContent = outcome;
    } else {
        // if value of selected key is equal to computer choice. Player wins
        outcome = rpsLogic[playerSelection] === computerSelection 
        ? (score.player += 1, 
           outcomeDescription.textContent = 
           `Player picked ${playerSelection}
            Computer picked ${computerSelection}.
            Player Wins`)
        : (score.computer += 1,
           outcomeDescription.textContent = 
           `Player picked ${playerSelection}\n
            Computer picked ${computerSelection}\n.
            Computer Wins`);
    }

    scoreText.textContent = `Player: ${score.player} Computer: ${score.computer}`;
}

// Initialisation
const rpsButtons = document.querySelector('.rps_buttons');
rpsButtons.classList.toggle('invisible');

const score = {'player': 0, 'computer': 0};
const scoreText = document.createElement('p');
scoreText.classList.add(...['score', 'invisible']);
scoreText.textContent = `Player: ${score.player} Computer: ${score.computer}`;

const outcomeDescription = document.createElement('p');
outcomeDescription.classList.add(...['outcome_description', 'invisible']);

const results = document.querySelector('.results');
results.appendChild(scoreText);
results.appendChild(outcomeDescription);

// Change visibility of items
function showControls() {
    rpsButtons.classList.remove('invisible');
    scoreText.classList.remove('invisible');
    outcomeDescription.classList.remove('invisible');    
}


const playBtn = document.querySelector('.playBtn')
playBtn.addEventListener('click', showControls, {once: true});

const play = document.querySelectorAll('.rps_button');
play.forEach((element) => element.addEventListener('click', 
() => playRound(element.id)
));