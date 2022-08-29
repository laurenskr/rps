  let playerSelection = "";
  const compChoice = document.querySelector('.compChoice');
  function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    switch (i) {
      case 0:
        return "rock"
      case 1:
        return "paper"
      case 2:
        return "scissors"
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
      switch (computerSelection) {
        case "rock":
          return `it's a tie, you both picked ${playerSelection}`
        case "paper":
          return `you lose, ${computerSelection} beats ${playerSelection}`
        case "scissors":
          return `you win! ${playerSelection} beats ${computerSelection}`
      }
    }
    else if (playerSelection == "paper") {
      switch (computerSelection) {
        case "paper":
          return `it's a tie, you both picked ${playerSelection}`
        case "scissors":
          return `you lose, ${computerSelection} beats ${playerSelection}`
        case "rock":
          return `you win! ${playerSelection} beats ${computerSelection}`
      }
    }
    else if (playerSelection == "scissors") {
      switch (computerSelection) {
        case "scissors":
          return `it's a tie, you both picked ${playerSelection}`
        case "rock":
          return `you lose, ${computerSelection} beats ${playerSelection}`
        case "paper":
          return `you win! ${playerSelection} beats ${computerSelection}`
      }
    }
  }
  function getPlayerSelection() {
    playerSelection = prompt("rock/paper/scissors?").toLowerCase()
    while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") {
      getPlayerSelection();
    }
      return playerSelection
  }

  function game() {
    for (let i = 0; i < 5; i++) {
      console.log(playRound(getPlayerSelection(), getComputerChoice()))
    }
  }
  game();
