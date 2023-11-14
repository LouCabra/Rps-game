let count = 0;

for (let i = 0; i < 5; i++) {
  game();
  count++;
}

function game() {
  const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors.");
  
     
  if (playerSelection === null || playerSelection.trim() === "") {
    console.log("Invalid input. Please enter a valid choice.");
    return;
  }
  
  
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const validChoices = ["rock", "paper", "scissors"];

  if (!validChoices.includes(playerChoice)) {
    return "Invalid selection. Please choose Rock, Paper, or Scissors.";
  }

  if (playerChoice === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "rock")
  ) {
    return "You Win! " + playerChoice + " beats " + computerSelection + ".";
  } else {
    return "You Lose!" + computerSelection + " beats " + playerChoice + ".";
  }
}
