// Pick a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

//Set up an event handler for the submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkGuess);

//Handler - check the Guess
function checkGuess() {
  const feedback = document.getElementById('rightOrWrong');
  const fieldGuess = document.getElementById('guessField');


  //Read the users guess
  let userGuess = Number(fieldGuess.value);

  if (userGuess === secretNumber) {
    feedback.textContent = 'Congratulations';
  }
  else {
    feedback.textContent = 'Wrong';
  }

} // end function checkGuess

fieldGuess.value = ''; //Blanks the space for the guess
fieldGuess.focus();//Puts the focus on the guess box

