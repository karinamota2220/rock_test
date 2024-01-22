function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'] // begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
  
    return arr[Math.floor(Math.random() * 3)] // generates a random number between 0 and 2 and then returns the element from the array arr. 
} // Math.floor rounds it down to the nearest integer. 
  
function playerSelection() {
    let choice = prompt('Choose between rock, paper and scissors: ')
    while (choice.toLowerCase() != 'rock' && choice.toLowerCase() != 'paper' && choice.toLowerCase() != 'scissors') {
        choice = prompt('Choose between rock, paper and scissors: ')
    }

    // The loop condition checks if the entered choice is not equal/valid  to 'rock', 'paper',
    // or 'scissors'. If the user entepeers an invalid choice, the prompt is displayed again.
    return choice.toLowerCase()
}
  
let player = 0
let computer = 0
  

  //  reassigning the values to playerSelection() and getComputerChoice()
  function playRound(computerChoice, playerChoice) {
    playerChoice = playerSelection()
    computerChoice = getComputerChoice()
  
    if (playerChoice === computerChoice) {
      console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nIt's a tie!`) // I am comparing players choice and computer choice to determine the winner of the round. if its a tie the funtion will repeat to start a new round.
      playRound()
  
    } else if (playerChoice === 'rock'  && computerChoice === 'paper') {
      computer++
      console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)
      
    } else if (playerChoice === 'rock'  && computerChoice === 'scissors') {
      player++
      console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)
  
    } else if (playerChoice === 'paper'  && computerChoice === 'rock') {
      player++
      console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)
  
    } else if (playerChoice === 'paper'  && computerChoice === 'scissors') {
      computer++
      console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)
  
    } else if (playerChoice === 'scissors'  && computerChoice === 'rock') {
      computer++
      console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou lost! \nYour score: ${player} \tComputer score: ${computer}`)
  
    } else if (playerChoice === 'scissors'  && computerChoice === 'paper') {
      player++
      console.log(`Your choice: ${playerChoice} \t Computer choice: ${computerChoice} \nYou win! \nYour score: ${player} \tComputer score: ${computer}`)
  
    }
  
    return player, computer
  }
  
  function game() {
    for (let i = 0; i < 5; i ++) { //  represents five rounds of the game.
      playRound()
    }
    if (player > computer) {
      console.log(`Your score: ${player} \tComputer score: ${computer} \n\nYou won the game!`)
    } else {
      console.log(`Your score: ${player} \tComputer score: ${computer} \n\nComputer won the game!`)
    }
  }
  
  game()