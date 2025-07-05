const decisionElement = document.querySelector('.decision');
const statsElement = document.querySelector('.stats');

document.querySelector('.js-rock').addEventListener('click', () => {
    checkComputer('Rock');
});

document.querySelector('.js-paper').addEventListener('click', () => {
    checkComputer('Paper');
});

document.querySelector('.js-scissors').addEventListener('click', () => {
    checkComputer('Scissors');
});

const calcWinRate = (wins, losses) => {
    let total = wins + losses;
    if (total == 0) return 0;
    else
        return (wins / (wins + losses)) * 100;
}


let player = JSON.parse(localStorage.getItem('score'));

if (player == null) {
    player = {
        wins: 0,
        loses: 0,
        ties: 0,
    };
}

player.win_rate = calcWinRate(player.wins, player.loses);

const ranChoice = () => {
    const ranNum = Math.random();

    if (ranNum >= 0 && ranNum < 1 / 3)
        return `Rock`;
    else if (ranNum >= 1 / 3 && ranNum < 2 / 3)
        return `Paper`;
    else
        return `Scissors`;
}

let playBool = false;
let intervalID;
function autoPlay() {
    if (!playBool) {
        intervalID = setInterval(() => {
            let ranPick = ranChoice();
            checkComputer(ranPick);
        }, 500);
        playBool = true;
    }
    else {
        clearInterval(intervalID);
        playBool = false;
    }
}

const checkComputer = (input) => {

    let compChoice = ranChoice();

    if (input == `Rock`)
        if (compChoice == `Paper`) {
            player.loses++;
            player.win_rate = calcWinRate(player.wins, player.loses);
            decisionElement.innerHTML = `Computer choose paper. You lose.`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
        }
        else if (compChoice == `Scissors`) {
            player.wins++;
            player.win_rate = calcWinRate(player.wins, player.loses);
            decisionElement.innerHTML = `Computer choose scissors. You win!`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
        }
        else {
            player.ties++;
            decisionElement.innerHTML = `Computer choose rock too. Draw!`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;

        }
    else if (input == `Paper`)
        if (compChoice == `Scissors`) {
            player.loses++;
            player.win_rate = calcWinRate(player.wins, player.loses);
            decisionElement.innerHTML = `Computer choose scissors. You lose.`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
        }
        else if (compChoice == `Rock`) {
            player.wins++;
            player.win_rate = calcWinRate(player.wins, player.loses);
            decisionElement.innerHTML = `Computer choose rock. You win!`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
        }
        else {
            player.ties++;
            decisionElement.innerHTML = `Computer choose paper too. Draw!`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
            player.win_rate = calcWinRate(player.wins, player.loses);
        }
    else
        if (compChoice == `Rock`) {
            player.loses++;
            player.win_rate = calcWinRate(player.wins, player.loses);
            decisionElement.innerHTML = `Computer choose rock. You lose.`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
        }
        else if (compChoice == `Paper`) {
            player.wins++;
            player.win_rate = calcWinRate(player.wins, player.loses);
            decisionElement.innerHTML = `Computer choose paper. You win!`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
        }
        else {
            player.ties++;
            player.win_rate = calcWinRate(player.wins, player.loses);
            decisionElement.innerHTML = `Computer choose scissors. Draw!`;
            statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
        }

    localStorage.setItem('score', JSON.stringify(player));
}

const restScores = () => {
    player.wins = player.loses = player.ties = player.win_rate = 0;
    decisionElement.innerHTML = `Scores rest.`;
    statsElement.innerHTML = `Wins: ${player.wins} Losses: ${player.loses} Ties: ${player.ties} Win rate: ${Math.round(player.win_rate)}%`;
}


