const scores = getScore() || { userScore: 0, computerScore: 0, ties: 0 };
const emojis = { emoji1: "?", emoji2: "?" };

emojis.emoji1 = document.getElementById("emoji1");
emojis.emoji2 = document.getElementById("emoji2");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");

const moves = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissor";
    }
}
const getMove = (move) => {
    const computerMove = moves();
    let result = getUserMoves(move, computerMove);
    displayEmoji(move, computerMove);


    setTimeout(() => {
        alert(`You chose ${move} and computer chose ${computerMove}. ${result}`);

        if (result === "You Win!") {
            scores.userScore++;
        } else if (result === "You Lose!") {
            scores.computerScore++;
        } else if (result === "Tie!") {
            scores.ties++;
        }
        localStorage.setItem('scores', JSON.stringify(scores));
        updateScores();
    }, 1000);

    setScore(scores);
}

//click event
rockBtn.addEventListener("click", () => getMove('rock'));
paperBtn.addEventListener("click", () => getMove('paper'));
scissorBtn.addEventListener("click", () => getMove('scissor'));

//key down event
document.body.addEventListener("keyup", (event) => {
    if (event.key === "r") {
        getMove('rock');
    } else if (event.key === "p") {
        getMove('paper');
    } else if (event.key === "s") {
        getMove('scissor');
    } else if (event.key === "Enter") {
        autoPlay();
    } else {
        alert('Invalid type');
    }
})


const updateScores = () => {
    document.getElementById("userScore").textContent = scores.userScore;
    document.getElementById("computerScore").textContent = scores.computerScore;
    document.getElementById("tieScore").textContent = scores.ties;
}
let isAutoPlaying = false
let intervalID;
const autoPlayBtn = document.querySelector('.autoPlayBtn');

autoPlayBtn.addEventListener("click", () => {
    if (!isAutoPlaying) {
        autoPlayBtn.innerHTML = "Stop Playing"
        intervalID = setInterval(() => {
            const playerMove = moves();
            getMove(playerMove);
        }, 2000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalID);
        isAutoPlaying = false;
        autoPlayBtn.innerHTML = "Auto Play"; 
    }
});

updateScores();
const displayEmoji = (move, computerMove) => {
    if (move === "rock") {
        emojis.emoji1.textContent = "✊";
        if (computerMove === "rock") {
            return emojis.emoji2.textContent = "✊";
        } else if (computerMove === "paper") {
            return emojis.emoji2.textContent = "✋";
        } else if (computerMove === "scissor") {
            return emojis.emoji2.textContent = "✌️";
        }
    } else if (move === "paper") {
        emojis.emoji1.textContent = "✋"
        if (computerMove === "rock") {
            return emojis.emoji2.textContent = "✊";
        } else if (computerMove === "paper") {
            return emojis.emoji2.textContent = "✋";
        } else if (computerMove === "scissor") {
            return emojis.emoji2.textContent = "✌️";
        }
    } else if (move === "scissor") {
        emojis.emoji1.textContent = "✌️"
        if (computerMove === "rock") {
            return emojis.emoji2.textContent = "✊";
        } else if (computerMove === "paper") {
            return emojis.emoji2.textContent = "✋";
        } else if (computerMove === "scissor") {
            return emojis.emoji2.textContent = "✌️";
        }
    }
}
const getUserMoves = (userMove, computerMove) => {
    if (userMove === computerMove) {
        return "Tie!";
    } else if ((userMove === "rock" && computerMove === "scissor") || (userMove === "paper" && computerMove === "rock") || (userMove === "scissor" && computerMove === "paper")) {
        return "You Win!";
    } else {
        return "You Lose!"
    }
}
const reset = () => {
    emojis.emoji1.textContent = "?";
    emojis.emoji2.textContent = "?";
    updateScores();
}
const resetAll = () => {
    scores.userScore = 0;
    scores.computerScore = 0;
    scores.ties = 0;
    localStorage.removeItem('scores')
    updateScores();
    reset();
}


function setScore(object) {
    localStorage.setItem('scores', JSON.stringify(object));

}
function getScore() {
    return JSON.parse(localStorage.getItem('scores'));
}