let wins = 0;
let losses = 0;
let draws = 0;

const result = document.createElement('div');

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
            if(computerSelection === 'rock') 
            draws++;
            else if (computerSelection === 'paper') 
            losses++;
            else 
            wins++;
            break;
        case 'paper':
            if(computerSelection === 'rock')  wins++;
            else if (computerSelection === 'paper')  draws++;
            else  losses++;
            break;
        case 'scissors':
            if(computerSelection === 'rock')  losses++;
            else if (computerSelection === 'paper')  wins++;
            else  draws++;
            break;
    }
    
        result.textContent = `Wins: ${wins} Losses: ${losses} Draws: ${draws}`;
  
        if(wins === 5){
            result.innerHTML += `<p>You Won!</p>`
            document.querySelectorAll('button').forEach(btn => btn.setAttribute('disabled', 'true'))
        } else if(losses === 5 ){
            result.innerHTML += `<p>Computer Won!</p>`
            document.querySelectorAll('button').forEach(btn => btn.setAttribute('disabled', 'true'))
        }
}
function game(){
        const rockBtn = document.createElement('button');
        rockBtn.textContent = "Rock";
        const paperBtn = document.createElement('button');
        paperBtn.textContent = "Paper";

        const scissorsBtn = document.createElement('button');
        scissorsBtn.textContent = "Scissors";

        document.body.append(rockBtn, paperBtn, scissorsBtn)

        rockBtn.addEventListener('click', ()=> playRound('rock',getComputerChoice() ))
        paperBtn.addEventListener('click',()=> playRound('paper',getComputerChoice() ))
        scissorsBtn.addEventListener('click',()=> playRound('scissors',getComputerChoice() ))
        document.body.appendChild(result)
}       
game()