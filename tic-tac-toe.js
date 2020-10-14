window.onload = event => {
    play();
}

function play (){

    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');
    let status = document.getElementById('status');
    let restart = document.getElementsByClassName('btn')[0];

     let gameState = new Array(9);
     let currSquare = 0;
     let end = false;
     let prevMove = 'O';

     for ( let s of squares )
      {
          s.classList.add('square');
          s.id = currSquare ++;

          s.onclick = (event) => {
              if (gameState[event.target.id] || end){
                  return;
              }

              if ( prevMove === 'X') {
                  event.target.innerText = 'O';
                  event.target.classList.add('O');
                  gameState[event.target.id] = 'O';
                  prevMove = 'O';
              }

              else if (prevMove === 'O') {
                  event.target.innerText = 'X';
                  event.target.classList.add('X');
                  gameState[event.target.id] = 'X';
                  prevMove = 'X'
              }

              if ( gameState[0] !== undefined && ((gameState[0]===gameState[1] && gameState[1]===gameState[2]) 
              || (gameState[0]===gameState[3] && gameState[3]===gameState[6]) 
              || (gameState[0]===gameState[4] && gameState[4]===gameState[8]) )){  
              
              status.innerText = `Congratulations! ${gameState[0]} is the Winner!`;
              status.classList.add('you-won');
              isGameEnd = true;
          }
          
          else if (gameState[4] !== undefined && ((gameState[1]===gameState[4] && gameState[4]===gameState[7]) 
              || (gameState[3]===gameState[4] && gameState[4]===gameState[5])
              || (gameState[2]===gameState[4] && gameState[4]===gameState[6]) )){
              
              status.innerText = `Congratulations! ${gameState[4]} is the Winner!`;
              status.classList.add('you-won');
              isGameEnd = true;
          }


          else if( gameState[8] !== undefined && ((gameState[6]===gameState[7] && gameState[7]===gameState[8]) 
              || (gameState[2]===gameState[5] && gameState[5]===gameState[8]))){
                  
              status.innerText = `Congratulations! ${gameState[8]} is the Winner!`;
              status.classList.add('you-won');
              isGameEnd = true;
          }
          };

          s.onmouseover = event => {
              if (!end){
                  event.target.classList.add('hover');
              }
          };

          s.onmouseleave = event => {
            if (!end){
                event.target.classList.remove('hover');
            }
        };

       

     }

     restart.onclick = event => {
         gameState = new Array(9);
         end = false;

         status.classList.remove('you-won');
         status.innerText = 'Move your mouse over a square and click to play an X or an O.';

         prevMove = 'O';

         for (let s of squares){
            s.classList.remove('X');
            s.classList.remove('O');
            s.innerText = '';
        }

       };

     }


    

