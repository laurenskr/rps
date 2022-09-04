  let cpuScore = 0;
  let playerScore = 0;
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
          cpuScore++;
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
          cpuScore++
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
          cpuScore++
          if (cpuScore == 5) {alert("you lost, resetting game"); cpuScore = 0}
          return `you lose, ${computerSelection} beats ${playerSelection}`
        case "paper":
          return `you win! ${playerSelection} beats ${computerSelection}`
      }
    }
  }

  //PLAYER SELECTION
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper")
  const scissorsButton = document.getElementById("scissors")
  rockButton.addEventListener("click", () => {outputDiv.innerText = `${playRound("rock", getComputerChoice())} and the cpu score is now ${cpuScore}`;
    if (cpuScore == 5) {alert("you lost, resetting game"); cpuScore = 0; outputDiv.innerText=""};
  });
  paperButton.addEventListener("click", () => outputDiv.innerText = `${playRound("paper", getComputerChoice())} and the cpu score is now ${cpuScore}`);
  scissorsButton.addEventListener("click", () => outputDiv.innerText = `${playRound("scissors", getComputerChoice())} and the cpu score is now ${cpuScore}`);
  //output in div
  const outputDiv = document.getElementById("output-div")

