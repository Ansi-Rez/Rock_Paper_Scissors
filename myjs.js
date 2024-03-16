let getComputerChoice = (function ()
{
	let choice = Math.floor(Math.random() * 3) + 1;

	switch(choice)
	{
	case 1:
		return "rock";
		break;
	case 2:
		return "paper";
		break;
	case 3:
		return "scissors";
		break;
	}
});

function playRound(playerSelection,computerSelection)
{
	if(computerSelection === playerSelection.toLowerCase())
	{
		return("You tied, Please try again!");
	}
	else if(computerSelection === "rock" && playerSelection.toLowerCase() === "scissors")
	{
		return("You lose, Rock beats Scissors!");
	}
	else if(computerSelection === "paper" && playerSelection.toLowerCase() === "rock")
	{
		return("You lose, Paper beats Rock!");
	}
	else if(computerSelection === "scissors" && playerSelection.toLowerCase() === "paper")
	{
		return("You lose, Scissors beats Paper!");
	}
	else if(computerSelection === "scissors" && playerSelection.toLowerCase() === "rock")
	{
		return("You Win, Rock beats Scissors!");
	}
	else if(computerSelection === "rock" && playerSelection.toLowerCase() === "paper")
	{
		return("You Win, Paper beats Rock!");
	}
	else if(computerSelection === "paper" && playerSelection.toLowerCase() === "scissors")
	{
		return("You Win, Scissors beats Paper!");
	}
	else
	{
		return("Please enter Rock, Paper or Scissors");
	}
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));