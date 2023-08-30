const p1Button = document.querySelector('#p1btn');
const p2Button = document.querySelector('#p2btn');
const p1Display = document.querySelector("#p1display");
const p2Display = document.querySelector("#p2display");
const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector('#ping');

let p1count = 0;
let p2count = 0;
let winningScore = 3;
let isGameOver = false;


p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1count += 1;
        if (p1count === winningScore) {// until winning score is  reached it is easy to write
            isGameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
            p1Button.disabled = true;
            p2Button.disabled = true; 
            p2Button.style.opacity = '0.5';
            p1Button.style.opacity = '0.5';
        }
        p1Display.innerText = p1count;
    }
    
})
p2Button.addEventListener('click', function(){
    if (!isGameOver) {
        p2count+=1;
        if (p2count === winningScore) {// until winning score is  reached it is easy to write
            isGameOver = true;//this make the whole condition false
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
            p1Button.disabled = true;
            p2Button.disabled = true;
            p2Button.style.opacity = '0.5';
            p1Button.style.opacity = '0.5';
            
        }
        p2Display.innerText = p2count;
      
    }
 
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    Reset();
})

reset.addEventListener('click', Reset)// event will refer this function
function Reset(){
    isGameOver = false;
    p1count = 0;
    p2count = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Button.style.opacity = '1';
    p2Button.style.opacity = '1';
    p1Display.innerText = 0;
    p2Display.innerText = 0;
}
