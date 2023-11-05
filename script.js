let teamAscore = 0;
let teamBscore = 0;

let teamAscoreValue = document.getElementById("teamAscore");
let teamBscoreValue = document.getElementById("teamBscore");

let incrementScore = (team) => {
    if (team === "teamA") {
        teamAscore++;
        teamAscoreValue.textContent = teamAscore;
    }
    else if (team === "teamB") {
        teamBscore++;
        teamBscoreValue.textContent = teamBscore;
    }
}

let decrementScore = (team) => {
    if (team === "teamA" && teamAscore > 0) {
        teamAscore--;
        teamAscoreValue.textContent = teamAscore;
    }
    else if (team === "teamB" && teamBscore > 0) {
        teamBscore--;
        teamBscoreValue.textContent = teamBscore;
    }
}

let resetScore = () => {
    teamAscore = 0;
    teamBscore = 0;
    teamAscoreValue.textContent = teamAscore;
    teamBscoreValue.textContent = teamBscore;
}