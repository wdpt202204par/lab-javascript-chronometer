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

                                        // [DEBUG] An extra counter ('debug chrono') is launched simultaneously with
                                        // 'chronometer' to control its proper functionning
                                        // (printed in the "Debug" section of chronometer HTML document)
                                        let debugChronoId; 
                                        let debugChrono = 0;

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();

                                        // [DEBUG] Printing chronometer.currentTime in 'Debug' section along with 'debugChrono' value
                                        document.getElementById('currentTime').innerHTML  = 'currentTime: <br>' + chronometer.currentTime;
                                        document.getElementById('debugTime').innerHTML    = 'Debug chrono: <br>' + debugChrono;
}

function printMinutes() {
  // Getting current minute with getMinutes() and turning it into a 2-digit string with computeTwoDigitNumber, then printing it in the document
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // Getting current second with getSeconds() and turning it into a 2-digit string with computeTwoDigitNumber, then printing it in the document
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getHundredths())[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getHundredths())[1];
}

function printSplit() {
  const newTimeSplit      = document.createElement('li');
  const minutes           = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds           = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  const hundredths        = chronometer.computeTwoDigitNumber(chronometer.getHundredths());

  newTimeSplit.innerHTML  = `${minutes}:${seconds}:${hundredths}`;

  document.getElementById('splits').appendChild(newTimeSplit);
}

function clearSplits() {
  chronometer.stop();
  chronometer.currentTime = 0;

  document.getElementById('splits').textContent = '';   // Removing content with 'textContent' seems faster than with 'innerHTML'
}

function setStopBtn() {
  btnLeftElement.classList.add('stop');
  btnLeftElement.classList.remove('start');

  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.add('split');
  btnRightElement.classList.remove('reset');

  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.add('start');
  btnLeftElement.classList.remove('stop');

  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.classList.add('reset');
  btnRightElement.classList.remove('split');

  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  // Starting the chronometer
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();

    chronometer.start(printTime);

                                        // [DEBUG] Starting debugging chrono
                                        debugChronoId   = setInterval(() => debugChrono++, 1);

  // Stopping the chronometer
  } else {
    setStartBtn();
    setResetBtn();

    chronometer.stop();

                                        // [DEBUG] Stopping debugging chrono
                                        clearInterval(debugChronoId);
                                        debugChrono = 0;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  console.log("Calling click event listener on btnRight");

  // Clicking on the right button while the chronometer is running (ie. btnRightElement classlist contains 'stop')
  if (btnLeftElement.classList.contains('stop')) {
    printSplit();
  // Clicking on the right button while the chronometer is stopped
  } else {
    clearSplits();
    printTime();
  }
});
