// const p1Button = document.querySelector('#p1btn');
// const p2Button = document.querySelector('#p2btn');
// const p1Display = document.querySelector("#p1display");
// const p2Display = document.querySelector("#p2display");

// let p1count = 0;
// let p2count = 0;refactoring the code to smaller
// const table = document.querySelector('tbody>td');
const p1 = {
    Name:player1,
    score : 0 ,
    Button  : document.querySelector('#p1btn'),
    Display :document.querySelector("#p1display"),
    winningList: document.querySelector('#player1'),
    winningTime: 0,
    statement:document.querySelector('#state1')
    
}
const p2 = {
    Name: player2,
    score : 0 ,
    Button  :  document.querySelector('#p2btn'),
    Display :document.querySelector("#p2display"),
    winningList: document.querySelector('#player2'),
    winningTime: 0,
    statement:document.querySelector('#state2')
}

const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector('#ping');

let winningScore = 3;

let isGameOver = false;
function userGame(player, opponent){
    if (!isGameOver) {
        player.score += 1;
   
        if (player.score === winningScore) {// until winning score is  reached it is easy to write
            isGameOver = true;
            player.Display.classList.add('has-text-success')
            opponent.Display.classList.add('has-text-danger')
           player.Button.disabled = true;
            opponent.Button.disabled = true; 
            player.Button.style.opacity = '0.5';
            opponent.Button.style.opacity = '0.5';
            player.winningTime += 1;
        }
        player.Display.textContent = player.score;
        player.winningList.textContent = player.winningTime;
        player.statement.textContent = `  ${ player.winningTime }  `;

        
    }
    
}


p1.Button.addEventListener('click', function () {
    userGame(p1, p2);
    
})
p2.Button.addEventListener('click', function(){
    userGame(p2, p1);
})



reset.addEventListener('click', Reset)// event will refer this function
function Reset(){
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.Display.classList.remove('has-text-success', 'has-text-danger');
        p.Button.disabled = false;
        p.Button.style.opacity = '1';
        p.Display.textContent = 0;
    }
    
}
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    Reset();
})
