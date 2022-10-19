function getComputerChoice(){
    const randomShape = Math.floor(Math.random() * 3);

    switch(randomShape){
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        case 'rock':
            if(computerSelection === 'rock') return 'draw'
            else if (computerSelection === 'paper') return 'lose'
            else return 'win'
        case 'paper':
            if(computerSelection === 'rock') return 'win'
            else if (computerSelection === 'paper') return 'draw'
            else return 'lose'
        case 'scissors':
            if(computerSelection === 'rock') return 'lose'
            else if (computerSelection === 'paper') return 'win'
            else return 'draw'
    }
}

function game(){
    for (let i=0; i<5; i++){
        const playerSelection = prompt('Write you shape:')
        const computerSelection = getComputerChoice();
        console.log( playRound(playerSelection, computerSelection))
    }
}
game()