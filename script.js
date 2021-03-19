
//Variables
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2= document.querySelector('.player--1');

score1.textContent = 0;
score2.textContent = 0;

let sc = 0; //Scorul curent
let totalScore1 = 0; 
let totalScore2 = 0; 
let player = true; //Daca e randul lui player1 atunci player==true, altfel e randul lui player2

rollDiceBtn.addEventListener('click', () => {
   let x = Math.trunc(Math.random()*6 +1);
   diceImg.hidden = false;
   diceImg.src = `dice-${x}.png`;
   //Daca e randul lui player1
   if(player == true) {
      if(x != 1) {
         sc += x;
         currentScore1.textContent = sc;
      }else {
         currentScore1.textContent = 0;
         sc = 0;
         player2Active();
      }
   //Daca e randul lui player2
   }else {
      player2.classList.add('player--active');
      if(x != 1) {
         sc += x;
         currentScore2.textContent = sc;
      }else {
         currentScore2.textContent = 0;
         sc = 0;
         player1Active();
      }
   }
})

holdBtn.addEventListener('click', () => {
   //If player1 chooses to keep his points
   if(player == true) {
      totalScore1 += sc;
      if(totalScore1 >= 100) {
        alert('Player1 wins');
        newGame();
      }
      sc = 0;
      player2Active();
      currentScore1.textContent = 0;
      score1.textContent = totalScore1;
   }else {
      totalScore2 += sc;
      if(totalScore2 >= 100) {
         alert('Player2 wins');
         newGame();
      }
      sc = 0;
      player1Active();
      currentScore2.textContent = 0;
      score2.textContent = totalScore2;
   }
})
function player1Active() {
   player = true;
   player2.classList.remove('player--active');
   player1.classList.add('player--active');
}
function player2Active() {
   player = false;
   player1.classList.remove('player--active');
   player2.classList.add('player--active');
}
function newGame() {
   diceImg.hidden = true;
   sc = 0;
   totalScore1 = totalScore2 = 0;
   player = true;
   currentScore1.textContent = 0;
   currentScore2.textContent = 0;
   score1.textContent = 0;
   score2.textContent = 0;
   player2.classList.remove('player--active');
   player1.classList.add('player--active');
}

newGameBtn.addEventListener('click', newGame);

