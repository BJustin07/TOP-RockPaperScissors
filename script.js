// Create a function that represents a Computer (AI) Player to return a value that can or literally represent Rock, Paper and Scissors.
// Get random choice from computer
// Return random choice of computer as it's move (R/P/S)

let HumanScore = 0;
let ComputerScore = 0;

function randomInt(range = 3){
    return Math.floor(Math.random() * range)
}

function getComputerChoice(){
    let choice = randomInt();
    console.log("Computer Chose: ", getMove(choice))
    return getMove(choice);
}

function getMove(moveNumber){
    let move = ""
    switch (moveNumber){
        case moveNumber = 0:
            move = "Rock"
            break;
        case moveNumber = 1:
            move = "Paper"
            break
        case moveNumber = 2:
            move = "Scissors"
    }
    return move
}

function getHumanChoice(){
    let humanInput = parseInt(prompt("What's your move? 0: Rock, 1: Paper, 2: Scissors"))
    while(isNaN(humanInput) || parseInt(humanInput) > 3){
        if(isNaN(humanInput)){
            humanInput = prompt("Thats an invalid move! Input a number!!! 0: Rock, 1: Paper, 2: Scissors")
        }else{
            humanInput = prompt("Thats an invalid move! Try Again, 0: Rock, 1: Paper, 2: Scissors")
        }
    }
    console.log("Human Chose: ", getMove(humanInput))
    return getMove(humanInput)
}

const humanMove = getHumanChoice();
const computerMove = getComputerChoice();

//Implement winning rounds for player since computer does not matter because if computer wins we just print YOU LOSE!
function playRound(humanMove, computerMove){
    if(humanMove === computerMove){
        console.log("DRAW!")
    }
}
