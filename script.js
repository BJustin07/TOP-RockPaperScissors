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

function playGame(){
    while(humanScore !== 5 && computerScore !==5){
            playRound()
            console.log("Moving on to the next round!")
    }
   if(humanScore === 5){
        return "You win against the Computer!"
    }else if (computerScore === 5){
        return "HAHA LOSER."
    }
   
}

function playRound(humanMove){
    const computerMove = getComputerChoice();
    let result = determineWinner(humanMove, computerMove)
    console.log(result)
    return [computerMove, result];
}

function determineWinner(humanMove, computerMove){
    if(humanMove === computerMove){
        return (drawText)
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
        return `You Win!`    
    }
    return `You Lose!`    
    
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.disabled = true;
paperBtn.disabled =true;
scissorsBtn.disabled = true;

const playerMoveText = document.querySelector("#player-move");
const computerMoveText = document.querySelector("#computer-move");
const playerCurrentScore = document.querySelector("#player-score");
const computerCurrentScore = document.querySelector("#computer-score");
const gameResultText = document.querySelector("#game-result");

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", (e)=>{
    rockBtn.disabled = false;
    paperBtn.disabled =false;
    scissorsBtn.disabled = false;
    startButton.textContent = "Restart Game";
    const playerScores = humanScore > 0 || computerScore > 0;
    if(e.target.textContent === "Restart Game" && playerScores){
        humanScore = 0;
        computerScore = 0;
        gameResultText.textContent = "";
        rockBtn.disabled = false;
        paperBtn.disabled =false;
        scissorsBtn.disabled = false;
        updateScores();
    }
})


function updateScores(){
    playerCurrentScore.textContent = `Your Score: ${humanScore}`;
    computerCurrentScore.textContent = `Computer Score: ${computerScore}`;
}

const playingButtons = document.querySelector(".playing-buttons");
playingButtons.addEventListener("click",event =>{
    if(event.target.tagName !== "BUTTON") return;
    const playerMove = event.target.textContent;
    const [computerMove,gameResult] = playRound(playerMove);
    playerMoveText.textContent = playerMove;
    computerMoveText.textContent = computerMove;
    gameResultText.textContent = gameResult;
    updateScores();
    if(humanScore >= 5){
        gameResultText.textContent = "Wow you won against the Computer, nice!";
        rockBtn.disabled = true;
        paperBtn.disabled =true;
        scissorsBtn.disabled = true;
    }else if(computerScore >= 5){
        gameResultText.textContent = "Wow you lost against the Computer, dumFok!";
        rockBtn.disabled = true;
        paperBtn.disabled =true;
        scissorsBtn.disabled = true;
    }
})

// let gameResult = playGame();
// console.log(gameResult)