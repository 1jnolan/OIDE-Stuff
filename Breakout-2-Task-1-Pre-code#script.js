// Pick a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

//Set up an event handler for the submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkGuess);

/* CODE BLOCK 5  */
let checkbox = document.getElementById("showNumberCkBx");
checkbox.addEventListener('click', toggleNumber);

/* CODE BLOCK 2 - handler for the checkbox */
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

//Handler Submit button - check the Guess
function checkGuess() {
  const feedback = document.getElementById('rightOrWrong');
  const fieldGuess = document.getElementById('guessField');


  //Read the users guess
  let userGuess = Number(fieldGuess.value);

  if (userGuess === secretNumber) {
    feedback.textContent = 'Congratulations';
    /* CODE BLOCK 4 */
    feedback.style.backgroundColor = 'green';

  }
  else {
    feedback.textContent = 'Wrong';2
    /* CODE BLOCK 1 */
    feedback.style.backgroundColor = 'red';
  }

} // end function checkGuess

fieldGuess.value = ''; //Blanks the space for the guess
fieldGuess.focus();//Puts the focus on the guess box








//Integrate the code blocks below into the program to carry out task 1

/* CODE BLOCK 1
feedback.style.backgroundColor = 'red';
*/



/* CODE BLOCK 3
    <br>
    <input id = "showNumberCkBx" type = "checkbox">
    <label id = "computerNumber"> </label>
*/


/* CODE BLOCK 4
feedback.style.backgroundColor = 'green';
*/

/* CODE BLOCK 5
let checkbox = document.getElementById("showNumberCkBx");
checkbox.addEventListener('click', toggleNumber);
*/
