
//Make both players into objects in order to simplify code.
const p1 = {
    button: document.querySelector("#player1Button"),
    score: 0,
    display: document.querySelector("#player1Score")
}

const p2 = {
    button: document.querySelector("#player2Button"),
    score: 0,
    display: document.querySelector("#player2Score")
}

const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#playTo");


let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;


//Watches form and sets the winning score to whatever the dropdown is
winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});


//Resets everything
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.removeAttribute('class');
        p.button.disabled = false;
    }
}


//Generic function, better than having to do the same thing twice
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("green");
            opponent.display.classList.add("red");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

resetButton.addEventListener("click", reset);

p1.button.addEventListener("click", function() {updateScores(p1, p2)});

p2.button.addEventListener("click", function() {updateScores(p2, p1)});
