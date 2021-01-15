function computerPlay() {
	let opt = ['Rock', 'Paper', 'Scissors']
	return opt[Math.floor(Math.random() * opt.length)]
}

function playRound(playerSelection, computerSelection) {

	playerSelection = playerSelection.toLowerCase();

	if (playerSelection == 'rock' && computerSelection == 'Rock') {
		return 'This match is a tie!!!!';
	} else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
		playerWins++;
		return 'ROCK BEATS SCISSORS, YOU WIN!!';
	} else if (playerSelection == 'rock' && computerSelection == 'Paper') {
		computerWins++;
		return 'PAPER BEATS ROCK, YOU LOST :('
	} else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
		return 'This match is a tie!!!!';
	} else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
		playerWins++;
		return 'SCISSORS BEATS PAPER, YOU WON :)'
	} else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
		computerWins++;
		return 'ROCK BEATS SCISSORS, YOU LOST :(';
	} else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
		computerWins++;
		return 'SCISSORS BEATS PAPER, YOU LOST :(';
	} else if (playerSelection == 'paper' && computerSelection == 'Paper') {
		return 'This match is a tie!!!!'
	} else (playerSelection == 'paper' && computerSelection == 'ROCK')
		playerWins++;
	return 'PAPER BEATS ROCK, YOU WON :)'
}

let computerWins = 0;
let playerWins = 0;

function game() {
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt('Type: Rock, Paper, or Scissors');
		playerSelection = playerSelection.toLowerCase();
		const computerSelection = computerPlay()
		console.log(playRound(playerSelection, computerSelection))
	}

	if (playerWins > computerWins) {
		console.log(`You're the winner! Final Score: ${playerWins} to ${computerWins}`);
	} else if (computerWins > playerWins) {
		console.log(`You're the loser. Final Score: ${playerWins} to ${computerWins}`);
	} else
		console.log(`You tied. Final Score: ${playerWins} to ${computerWins}`);
}

game();
