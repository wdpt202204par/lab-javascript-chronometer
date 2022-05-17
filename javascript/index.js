const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');



// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === "START") {  // Demarrage du chrono

    // 1. passer le bouton en rouge
    btnLeftElement.setAttribute("class", "btn stop");
    // 2. changer le texte du bouton en "STOP"
    btnLeftElement.innerHTML = "STOP";

    // 1. passer le bouton en BLEU
    btnRightElement.setAttribute("class", "btn split");
    // 2. changer le texte du bouton en "SPLIT"
    btnRightElement.innerHTML = "SPLIT"

    chronometer.start(function () { // Mise a jour du chrono sur la page HTML

      minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
      minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];


      secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
      secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
    })
  } else { // Arret du chrono
    btnLeftElement.setAttribute("class", "btn start")
    btnLeftElement.innerHTML = "START"

    btnRightElement.setAttribute("class", "btn reset")
    btnRightElement.innerHTML = "RESET"
    chronometer.stop()
  }

});




// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement === "STOP") {
    let printSplit = document.createElement('li');
    printSplit.innerHTML = chronometer.printSplit();
    splitsElement.appendChild(printSplit);
  } else {
    chronometer.reset()
  }
});

