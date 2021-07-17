'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


let score = 20;
let highscore = 0;
const number = Math.trunc(Math.random()*20+1);

document.querySelector('.check').addEventListener(
  'click', function () {

   const guess =  Number(document.querySelector('.guess').value);
   
   if(!guess)
   {
     document.querySelector('.message').textContent = "⛔ No number!";
   }
   if(guess === number)
    {
       document.querySelector('.message').textContent = "🎉 Correct Number";
       document.querySelector('.number').textContent = number;
       if(highscore < score)
           {
             highscore = score;
             document.querySelector('.highscore').textContent = highscore;
           }
      

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
   else if(guess > number)
   {
     if(score>0)
     {
      document.querySelector('.message').textContent = "📈 Too High";
      score--;
      document.querySelector('.score').textContent = score;
      
     }
     else
     {
       document.querySelector('.message').textContent = "You lost the Game";
     }
   }
   else
   {
     if(score>0)
     {
      document.querySelector(".message").textContent = "📉 Too Low";
      score--;
      document.querySelector('.score').textContent = score;
     }
     else
         document.querySelector('.message').textContent = "You lost the Game";
   }  

});

document.querySelector('.again').addEventListener(
  'click', function()
  {
    score=20;
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    }
)


