function getComputerChoice(){
    const randomShape = Math.floor(Math.random() * 3);

    switch(randomShape){
        case 0:
        return "Rock";
        case 1:
        return "Paper";
        case 2:
        return "Scissors";
    }
}