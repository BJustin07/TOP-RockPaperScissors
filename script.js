// Create a function that represents a Computer (AI) Player to return a value that can or literally represent Rock, Paper and Scissors.
// Get random choice from computer
// Return random choice of computer as it's move (R/P/S)

let humanScore = 0;
let computerScore = 0;
let youWinText = `You Win! Your Score: ${humanScore}, Computer Score: ${computerScore}`
let youLoseText = `You Lose! Your Score: ${humanScore}, Computer Score: ${computerScore}`
let drawText = `Draw!`

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
    while(isNaN(humanInput) || parseInt(humanInput) > 3 || humanInput === undefined || humanInput === null){
        if(isNaN(humanInput)){
            humanInput = prompt("Thats an invalid move! Input a number!!! 0: Rock, 1: Paper, 2: Scissors")
        }else{
            humanInput = prompt("Thats an invalid move! Try Again, 0: Rock, 1: Paper, 2: Scissors")
        }
    }
    console.log("Human Chose: ", getMove(humanInput))
    return getMove(humanInput)
}

//FIX PLAY GAME!!!! STILL LOOPS AFTER WINNER IS ALREADY AT 5
function playGame(){
    while(noWinner){
            playRound()
            console.log("Moving on to the next round!")
    }
   if(humanScore === 5){
        return "You win against the Computer!"
    }else if (computerScore === 5){
        return "HAHA LOSER."
    }
   
}

function playRound(){
    const humanMove = getHumanChoice();
    const computerMove = getComputerChoice();
    let result = determineWinner(humanMove, computerMove)
    console.log(result)
}

function determineWinner(humanMove, computerMove){
    if(humanMove === computerMove){
        return (drawText + `  Your Score: ${humanScore}, Computer Score: ${computerScore} `)
    }
    let result = ""
    switch (humanMove){
        case ("Rock"):
            if(computerMove === "Scissors"){
                humanScore++
                return getScore(humanScore, computerScore, true);
            }else{
                computerScore++;
                return getScore(humanScore, computerScore, false);
            }
        case ("Paper"):
            if (computerMove === "Rock"){
                humanScore++
                 return getScore(humanScore, computerScore, true);
            }else{
                computerScore++;
               return getScore(humanScore, computerScore, false);
            }
        case ("Scissors"):
            if(computerMove === "Paper"){
                humanScore++;
                 return getScore(humanScore, computerScore, true);
            }else{
                computerScore++
               return getScore(humanScore, computerScore, false);
            }
        default:
            return console.log("Unexpected moves, please try again.")

    }
}

function getScore(humanScore, computerScore, gameResult){
    if(gameResult === true){
        return `You Win! Your Score: ${humanScore}, Computer Score: ${computerScore}`    
    }
    return `You Lose! Your Score: ${humanScore}, Computer Score: ${computerScore}`    
    
}

let gameResult = playGame();
console.log(gameResult)