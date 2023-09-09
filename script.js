function computerSelection() {
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

function playRound(playerSelection, computerSelection) {
    // Removing case ins
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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

function game(maxRound = 1) {
    let score = {player: 0, computer: 0};
    let result;

    for (let round = 0; round < maxRound; round++) {
        playerSelection = prompt('Rock, Paper, Scissors?: ');
        result = playRound(playerSelection, computerSelection());

        if (result[0] === 'result: Player wins') {
            score.player++;
        } else if (result[0] === 'result: Computer wins') {
            score.computer++;
        }

        console.log(`Player chose ${result[1]}, Computer chose ${result[2]}, ${result[0]}`)
        console.log(score);
    }
}

// game();
