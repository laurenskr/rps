  let playerSelection = "";
  const compChoice = document.querySelector('.compChoice');
  function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    switch (i) {
      case 0:
        return "rock"
        break;
      case 1:
        return "paper"
        break;
      case 2:
        return "scissors"
        break;
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
      switch (computerSelection) {
        case "rock":
          return `it's a tie, you both picked ${playerSelection}`
          break;
        case "paper":
          return `you lose, ${computerSelection} beats ${playerSelection}`
          break;
        case "scissors":
          return `you win! ${playerSelection} beats ${computerSelection}`
          break;
      }
    }
    else if (playerSelection == "paper") {
      switch (computerSelection) {
        case "paper":
          return `it's a tie, you both picked ${playerSelection}`
          break;
        case "scissors":
          return `you lose, ${computerSelection} beats ${playerSelection}`
          break;
        case "rock":
          return `you win! ${playerSelection} beats ${computerSelection}`
          break;
      }
    }
    else if (playerSelection == "scissors") {
      switch (computerSelection) {
        case "scissors":
          return `it's a tie, you both picked ${playerSelection}`
          break;
        case "rock":
          return `you lose, ${computerSelection} beats ${playerSelection}`
          break;
        case "paper":
          return `you win! ${playerSelection} beats ${computerSelection}`
          break;
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
