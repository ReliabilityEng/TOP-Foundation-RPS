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
        outcomeDescription.textContent = `Player picked ${playerSelection}
                                          Computer picked ${computerSelection}.
                                          Result: Draw`;
        
    } else {
        // if value of selected key is equal to computer choice. Player wins
        if (rpsLogic[playerSelection] === computerSelection) {
            score.player ++;
            outcomeDescription.textContent = 
           `Player picked ${playerSelection}
            Computer picked ${computerSelection}.
            Player Wins`;

            if (score.player >= 5) {
                outcomeDescription.textContent = 'Player is the OVERALL WINNER'
                rpsButtons.classList.add('invisible');
                playBtn.addEventListener('click', showControls, {once: false});
            }

        } else {

            score.computer ++;
            outcomeDescription.textContent = 
           `Player picked ${playerSelection}
            Computer picked ${computerSelection}.
            Computer Wins`;

            if (score.computer >= 5) {
                outcomeDescription.textContent = 'Computer is the OVERALL WINNER'
                rpsButtons.classList.add('invisible');
                playBtn.addEventListener('click', showControls, {once: false});
            }
        }
            
    }
    
    score.rounds++;
    scoreText.textContent = `Round: ${score.rounds} Player: ${score.player} Computer: ${score.computer}`;
}

// Initialisation
const score = {'player': 0, 'computer': 0, 'rounds': 0};
const rpsButtons = document.querySelector('.rps_buttons');
const scoreText = document.querySelector('.score');
const outcomeDescription = document.querySelector('.outcome_description');


// Change visibility of items
function showControls() {
    rpsButtons.classList.remove('invisible');
    scoreText.classList.remove('invisible');
    outcomeDescription.classList.remove('invisible');
    [score.player, score.computer] = [0, 0];
    scoreText.textContent = `Player: ${score.player} Computer: ${score.computer}`;   
}


const playBtn = document.querySelector('.playBtn')
playBtn.addEventListener('click', showControls, {once: true});

const play = document.querySelectorAll('.rps_button');
play.forEach((element) => element.addEventListener('click', () => playRound(element.id)));