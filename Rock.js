function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"] // let computer pick [rock, paper, scissors]
    let randomChoice = Math.floor(Math.random() * computerChoice.length) + 1 // randomize rock paper and scissors

    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else if (randomChoice === 3) {
        return "scissors"
    }
}
// console.log("Value of getComputerChoice: " + getComputerChoice());

let player = 0
let computer = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Your choice: ${playerSelection} \t Computer choice: ${computerSelection} \nIt's a tie!`)
        playRound()
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        player++
        // return "Congrets! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Congrets! Scissors beats Paper!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Congrets! Paper beats Rock!"
    } else {
        return `you lose! ${computerSelection} beats ${playerSelection}.`;

    }
}

console.log(playRound())


// const playerSelection = prompt("Start the game by picking among Rock, Paper, Scissors.").toLowerCase();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))

// tried adding the my older functions into my game functions by using the {}, at first it seemed to work until i ran into an error saying that getComputerChoice 
// is not defined even though previously it had worked. 

/*game() runs a best of 5 rock paper scissors game*/

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     while(computerScore < 3 && playerScore < 3) {
//         let matchResult = playRound();
//         console.log("matchReszult: " + matchResult)

//         if (matchResult == "You lose! paper beats rock." || matchResult == "You lose! scissors beats Paper." || matchResult == "You lose! Rock beats Scissors.") {
//             computerScore++;
//             break;
//         }  else if (matchResult == "Congrets! Paper beats Rock." || matchResult == "Congrets! Scissors beats Paper." || matchResult == "Congrets! Rock beats Scissors.") {
//             playerScore++;
//             break;
//         }  else if (computerScore > playerScore) {
//             console.log("You lost the game.")
//         } else if(playerScore > computerScore) {
//             console.log("You won the game!")
//         } else if (matchResult == "It's a tie!") {
//             break
//         } else {
//             console.log("Something went wrong!")
//             console.log("Got unknown matchResult: " + matchResult)
//             break
//         } 

//     }
    
// }

// console.log(game());