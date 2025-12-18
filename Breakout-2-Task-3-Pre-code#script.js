// Pick a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

//setup an event handler for the submit button:
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkGuess);


const newGameBtn = document.getElementById('newgame-btn');
newGameBtn.addEventListener('click', newGame);

let guessCount = 0;
newGame()
//Set up an event handler for the submit button


//adds new button


//Crrates listener for the chackbox
let checkbox = document.getElementById("showNumberCkBx");
checkbox.addEventListener('click', toggleNumber);

//Handler - check the Guess
function checkGuess() {
  const feedback = document.getElementById('rightOrWrong');
  const guessField = document.getElementById('guessField');


  //Read the users guess
  let userGuess = Number(guessField.value);
  guessCount++;

  if (userGuess === secretNumber) {
    feedback.textContent = 'Congratulations';
    feedback.style.backgroundColor = 'green';

    displayStats();//call the function to display the number of guesses.

  }
  else {
    feedback.textContent = 'Wrong';
    feedback.style.backgroundColor = 'red';
    displayStats();//call the function to display the number of guesses.

  }


  let unorderedList = document.getElementById("prevGuesses");
  let newListItem = document.createElement("li");
  newListItem.textContent = guessField.value;
  unorderedList.appendChild(newListItem);


  //Display a helpful message to the user
  let helpfulMsgField = document.getElementById("lowOrHi");
  if (userGuess < secretNumber) {
     helpfulMsgField.textContent = 'Too Low!';
  } else if (userGuess > secretNumber) {
      helpfulMsgField.textContent = 'Too High!';
  } else if (userGuess === secretNumber){
     helpfulMsgField.textContent = 'Just right!';
  }
  
guessField.value = ''; //Blanks the space for the guess
guessField.focus();//Puts the focus on the guess box
}
//Tick box to show correct answer
function toggleNumber() {
  const computerNumber = document.getElementById('computerNumber');
  if (checkbox.checked) {
    computerNumber.style.visibility = 'visible';
    computerNumber.textContent = secretNumber;
  }
  else {
    computerNumber.style.visibility = 'hidden';
  }
}


function displayStats() {
  //Display the number of guesses
  let statsPara = document.getElementById("stats");
  statsPara.textContent = "You took "+guessCount+" guesses";
}


/** CODE BLOCK 1
const newGameBtn = document.getElementById('newgame-btn');
newGameBtn.addEventListener('click', newGame);
 */

/*
<!-- CODE BLOCK 2
<button id="newgame-btn" type="button">New game</button>
-->
*/
  
/** CODE BLOCK 3
function newGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  guessCount = 0

  submitBtn.disabled = false;
  newGameBtn.disabled = true;

  document.getElementById('computerNumber').textContent = "";
  document.getElementById('showNumberCkBx').checked = false;
  document.getElementById('rightOrWrong').textContent = "";
  document.getElementById('lowOrHi').textContent = "";
  document.getElementById('prevGuesses').innerHTML = "";
  document.getElementById('stats').textContent = "";
}
 */

/** CODE BLOCK 4
function gameOver(){
  submitBtn.disabled = true;
  newGameBtn.disabled = false;
  displayStats();
}
 */

/** CODE BLOCK 5
// Start a new game
newGame(); 
*/

/** CODE BLOCK 6
gameOver();
*/
