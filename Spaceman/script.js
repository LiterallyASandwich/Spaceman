/*----- constants -----*/
const correct = 
  ['A','B','G','I','N','Z']
const incorrect = 
  ['C','D','E','F','H','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y']


/*----- app's state (variables) -----*/
let buttons = document.querySelectorAll('button');
let incorrectTally;


/*----- cached element references -----*/
//const winOrLose = document.getElementById('winlose');



/*----- event listeners -----*/
for(let button of buttons) {
button.addEventListener('click', handleChoice);
}




/*----- functions -----*/
init();

function init() {
  incorrectTally = 0
}

function handleChoice(evt) {
  if (incorrect.includes(evt.currentTarget.innerText)) {
    incorrectTally += 1;
    checkForWinner();
    checkForHeight();
  } else if (evt.currentTarget.innerText === correct['0']) { 
    document.getElementById('Aa1').innerText = 'A'; 
    document.getElementById('Aa2').innerText = 'A';
    checkForWinner();
    checkForHeight();
  } else if (evt.currentTarget.innerText === correct['1']) { 
    document.getElementById('Ba').innerText = 'B';
    checkForWinner();
    checkForHeight();
  } else if (evt.currentTarget.innerText === correct['2']) { 
    document.getElementById('Ga').innerText = 'G';
    checkForWinner();
    checkForHeight();
  } else if (evt.currentTarget.innerText === correct['3']) { 
    document.getElementById('Ia').innerText = 'I';
    checkForWinner();
    checkForHeight();
  } else if (evt.currentTarget.innerText === correct['4']) { 
    document.getElementById('Na').innerText = 'N';
    checkForWinner();
    checkForHeight();
  } else if (evt.currentTarget.innerText === correct['5']) { 
    document.getElementById('Za').innerText = 'Z'
    checkForWinner();
    checkForHeight();
  } else if (evt.currentTarget.innerText === 'Try Again?') {
    document.getElementById('Aa1').innerText = '_';
    document.getElementById('Aa2').innerText = '_';
    document.getElementById('Ba').innerText = '_';
    document.getElementById('Ga').innerText = '_';
    document.getElementById('Ia').innerText = '_';
    document.getElementById('Na').innerText = '_';
    document.getElementById('Za').innerText = '_';
    incorrectTally = 0;
    document.getElementById('winlose').innerText = '_';
    document.getElementById('man').style.marginTop = '100px';
  }
}

  function checkForWinner() {
    if (incorrectTally >= 5) {
      document.getElementById('winlose').innerText = "You Lose...";
    } else if (document.getElementById('Aa1').innerText === 'A' &&
               document.getElementById('Aa2').innerText === 'A' &&
               document.getElementById('Ba').innerText === 'B' &&
               document.getElementById('Ga').innerText === 'G' &&
               document.getElementById('Ia').innerText === 'I' &&
               document.getElementById('Na').innerText === 'N' &&
               document.getElementById('Za').innerText === 'Z') { 
      document.getElementById('winlose').innerText = "You Win!";
    }
  }

 function checkForHeight() {
  if (incorrectTally === 0) {
    document.getElementById('man').style.marginTop = '100px';
  } else if ((incorrectTally === 1)) {
    document.getElementById('man').style.marginTop = '65px';
  } else if ((incorrectTally === 2)) {
    document.getElementById('man').style.marginTop = '30px';
  } else if ((incorrectTally === 3)) {
    document.getElementById('man').style.marginTop = '-5px';
  } else if ((incorrectTally === 4)) {
    document.getElementById('man').style.marginTop = '-40px';
  } else if ((incorrectTally === 5)) {
    document.getElementById('man').style.marginTop = '-75px';
  }
 }