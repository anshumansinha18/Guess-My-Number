'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random()*20+1);


const displayMessage = function(Message){
  document.querySelector('.message').textContent = Message;
}

document.querySelector('.check').addEventListener(
  'click', function () {

   const guess =  Number(document.querySelector('.guess').value);
   
   if(!guess)
   {
     displayMessage("⛔ No number!");
   }
   else if(guess === number)
    {
       displayMessage("🎉 Correct Number");
       document.querySelector('.number').textContent = number;
       if(highscore < score)
           {
             highscore = score;
             document.querySelector('.highscore').textContent = highscore;
           }
      

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
   else if(guess !== number)
   {
     if(score>0)
     {
      displayMessage((guess > number)?"📈 Too High":"📉 Too Low");
      score--;
      document.querySelector('.score').textContent = score;
      
     }
     else
     {
       displayMessage("You lost the Game");
     }
   }
});

document.querySelector('.again').addEventListener(
  'click', function()
  {
    score=20;
    number = Math.trunc(Math.random()*20+1);

    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    displayMessage("Start guessing...");
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    }
)


