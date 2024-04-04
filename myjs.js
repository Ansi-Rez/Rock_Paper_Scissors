var playerScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".results");
const score = document.querySelector(".score");
score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
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
		score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
		return("You tied, Please try again!");
	}
	else if(computerSelection === "rock" && playerSelection.toLowerCase() === "scissors")
	{
		computerScore += 1;
		if(playerScore === 5||computerScore === 5)
		{
			if(playerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Player has won, click any button to play again";
			}
			else if(computerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Computer has won, click any button to play again";
			}
		}
		else
		{
		score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
		return("You lose, Rock beats Scissors!");
		}
	}
	else if(computerSelection === "paper" && playerSelection.toLowerCase() === "rock")
	{
		computerScore += 1;
		if(playerScore === 5||computerScore === 5)
		{
			if(playerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Player has won, click any button to play again";
			}
			else if(computerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Computer has won, click any button to play again";
			}
		}
		else
		{
		score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
		return("You lose, Paper beats Rock!");
		}
	}
	else if(computerSelection === "scissors" && playerSelection.toLowerCase() === "paper")
	{
		computerScore += 1;
		if(playerScore === 5||computerScore === 5)
		{
			if(playerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Player has won, click any button to play again";
			}
			else if(computerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Computer has won, click any button to play again";
			}
		}
		else
		{
		score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
		return("You lose, Scissors beats Paper!");
		}
	}
	else if(computerSelection === "scissors" && playerSelection.toLowerCase() === "rock")
	{
		playerScore += 1;
		if(playerScore === 5||computerScore === 5)
		{
			if(playerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Player has won, click any button to play again";
			}
			else if(computerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Computer has won, click any button to play again";
			}
		}
		else
		{
		score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
		return("You Win, Rock beats Scissors!");
		}
	}
	else if(computerSelection === "rock" && playerSelection.toLowerCase() === "paper")
	{
		playerScore += 1;
		if(playerScore === 5||computerScore === 5)
		{
			if(playerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Player has won, click any button to play again";
			}
			else if(computerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Computer has won, click any button to play again";
			}
		}
		else
		{
		score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
		return("You Win, Paper beats Rock!");
		}
	}
	else if(computerSelection === "paper" && playerSelection.toLowerCase() === "scissors")
	{
		playerScore += 1;
		if(playerScore === 5||computerScore === 5)
		{
			if(playerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Player has won, click any button to play again";
			}
			else if(computerScore === 5)
			{
				score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
				playerScore = 0;
				computerScore = 0;
				return "Computer has won, click any button to play again";
			}
		}
		else
		{
		score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
		return("You Win, Scissors beats Paper!");
		}
	}
	else
	{
		return("Please enter Rock, Paper or Scissors");
	}
}



for(let i = 0; i < buttons.length; i++)
{
	let playerSelection;
	switch (i)
	{
		case 0:
			buttons[i].addEventListener("click",() =>
			{
				playerSelection = "rock";
				console.log(playerSelection);
				result.textContent = playRound(playerSelection, getComputerChoice());
			});
		break;

		case 1:
			buttons[i].addEventListener("click",() =>
			{
				playerSelection = "paper";
				console.log(playerSelection);
				result.textContent = playRound(playerSelection, getComputerChoice());
			});
		break;

		case 2:
			buttons[i].addEventListener("click",() =>
			{
				playerSelection = "scissors";
				console.log(playerSelection);
				result.textContent = playRound(playerSelection, getComputerChoice());
			});
		break;
	}
}