let grid = document.querySelector('#grid');
let button = document.querySelector('button');
let gameOver = document.querySelector('gameOver');
let myButton = document.getElementById('myButton');
let myText =document.getElementById('myText');
let output = document.getElementById('output1');
let playAgainBtn = document.getElementById('playAgainBtn');

//Enter name
function myName (){
    output.innerText = myText.value;
}
myButton.addEventListener('click', myName);

const board = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    //rows
    {combo: [1, 2, 3]},
    {combo: [4, 5, 6]},
    {combo: [7, 8, 9]},
    //columns
    {combo: [1, 4, 7]},
    {combo: [2, 5, 8]},
    {combo: [3, 6, 9]},
    //diagonals
    {combo: [1, 5, 9]},
    {combo: [3, 5, 7]},
]; 

const PLAYER_X = "X"; 
const PLAYER_O = "O"; 
let currentPlayer = PLAYER_X;
let winningRound = false;


grid.addEventListener('click', function(ev){
       const cell = ev.target;
       const cellNumber = cell.id[0];
       //console.log(cellNumber);
       if (cell.innerText != ""){
        return;
       }

       if (currentPlayer === PLAYER_X){
        cell.innerText = PLAYER_X;
        board[cellNumber - 1] = PLAYER_X;
        currentPlayer = PLAYER_O;
      }
      else{
        cell.innerText = PLAYER_O;
        board[cellNumber - 1] = PLAYER_O;
        currentPlayer = PLAYER_X;
      }

      checkWinner();
 });

function checkWinner (){
    for (let r = 0; r < board.length; r++){
    if(board[r] === currentPlayer){
        if(board[1] === currentPlayer && board[2] === currentPlayer ){
           console.log(currentPlayer, "Wins on top!")
           return true;
        }
        if(board[3] === currentPlayer && board[6] === currentPlayer){ 
            console.log(currentPlayer, "Wins on left!");
            return true;
        }
        if(board[4] === currentPlayer && board[8] === currentPlayer){
            console.log(currentPlayer, "Wins on diagonally!")
            return true;
        }

        //document.getElementsByClassName('cell').style.backgroundColor ="red";
    };
    if (board[r] === currentPlayer){
        if(board[2] === currentPlayer && board[5] === currentPlayer){
            console.log("Win1!")
            return true;
         }
        if(board[6] === currentPlayer && board[7] === currentPlayer){
            console.log("Win2!")
            return true;       
        }
    };
    if (board[r] === currentPlayer){
        if(board[1] === currentPlayer && board[7] === currentPlayer){
            console.log("Win3!")
            return true;
         }
        if(board[3] === currentPlayer && board[5] === currentPlayer){
            console.log("Win4!")
            return true;
        }
    }
};
 }

 playAgainBtn.addEventListener("click", function(){
    location.reload()
})

