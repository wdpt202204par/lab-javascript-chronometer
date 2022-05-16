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

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

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
  if (btnLeftElement.innerHTML === "START") { // Demarrage du chrono
    btnLeftElement.setAttribute("class", "btn stop")
    btnLeftElement.innerHTML = "STOP"
    chronometer.start(function () { // Mise a jour du chrono sur la page HTML

    })
  } else { // Arret du chrono
    btnLeftElement.setAttribute("class", "btn start")
    btnLeftElement.innerHTML = "START"
    chronometer.stop()
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

});











/*var change =
  document.getElementById("btnLeft");
if (change.innerHTML == "start"); {
  change.innerHTML = "stop";
}*/