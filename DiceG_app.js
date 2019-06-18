
let score = 0;

function    rollDice(){
    dice = Math.floor(Math.random() * (6)) + 1;
    document.getElementById('die1').innerHTML = dice;
    document.getElementById('diceImg').src = `./img/dice${dice}.png`;
    score += dice;
    document.getElementById('score').innerHTML = score;

    if  (dice === 1){
        document.getElementById('diceImg').src = `./img/dice1.png`;
        document.getElementById('result').innerHTML = "You Lost";
        document.getElementById('rollBtn').disabled = true;
        
        // setTimeout(alertLoser(), 300,0);
        // reset();
    }
    else if (score >= 21){
        document.getElementById('result').innerHTML = "You Win";
        document.getElementById('rollBtn').disabled = true;
    }
}

// function    alertLoser(){
//     alert("You rolled a 1, Loser!");
// }

function    reset(){
    window.location.reload()
}
